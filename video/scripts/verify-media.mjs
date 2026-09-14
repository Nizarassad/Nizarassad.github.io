import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve(process.cwd(), process.argv[2] ?? 'out/flagship-01-proof.mp4');
if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
  throw new Error(`Missing or empty proof: ${file}`);
}

const raw = execFileSync('ffprobe', [
  '-v', 'error',
  '-show_entries', 'format=duration',
  '-show_entries', 'stream=codec_type,width,height,r_frame_rate',
  '-of', 'json',
  file,
], {encoding: 'utf8'});

const media = JSON.parse(raw);
const video = media.streams.find((s) => s.codec_type === 'video');
const audio = media.streams.filter((s) => s.codec_type === 'audio');
const duration = Number(media.format.duration);

const failures = [];
if (!video) failures.push('No video stream.');
if (video && (video.width !== 960 || video.height !== 540)) {
  failures.push(`Expected 960x540, got ${video.width}x${video.height}.`);
}
if (video && video.r_frame_rate !== '30/1') {
  failures.push(`Expected 30 fps, got ${video.r_frame_rate}.`);
}
if (!(duration >= 344.5 && duration <= 345.5)) {
  failures.push(`Expected about 345 seconds, got ${duration}.`);
}
if (audio.length !== 0) failures.push(`Expected zero audio streams, got ${audio.length}.`);

fs.mkdirSync(path.dirname(file), {recursive: true});
fs.writeFileSync(
  path.join(path.dirname(file), 'media.json'),
  JSON.stringify({duration, streams: media.streams, fileSize: fs.statSync(file).size}, null, 2) + '\n',
);
const hash = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
fs.writeFileSync(path.join(path.dirname(file), 'SHA256SUMS.txt'), `${hash}  ${path.basename(file)}\n`);
fs.copyFileSync(path.resolve(process.cwd(), 'sources.json'), path.join(path.dirname(file), 'sources.json'));

console.log(JSON.stringify({duration, width: video?.width, height: video?.height, fps: video?.r_frame_rate, audioStreams: audio.length, sha256: hash}));

if (failures.length) {
  throw new Error(failures.join('\n'));
}
