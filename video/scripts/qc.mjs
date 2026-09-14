import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const files = ['src/Flagship01.tsx', 'src/Root.tsx', 'sources.json'];
const text = files.map((f) => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');

const required = [
  'Ad · ElevenLabs affiliate · #ElevenCreativePartner',
  'This is not an ElevenLabs voice sample',
  'checked 2026-09-14',
  'not a full benchmark',
  'non-commercial purposes',
  'commercial purposes',
];

const forbidden = [
  'Nizar Assad',
  'assadnizar40',
  'Casablanca',
  'github.com/Nizarassad',
  'human narration',
  'best AI voice',
  'guaranteed',
];

const failures = [];
for (const value of required) {
  if (!text.toLowerCase().includes(value.toLowerCase())) failures.push(`Missing required text: ${value}`);
}
for (const value of forbidden) {
  if (text.toLowerCase().includes(value.toLowerCase())) failures.push(`Forbidden text present: ${value}`);
}

const rootFile = fs.readFileSync(path.join(root, 'src/Root.tsx'), 'utf8');
if (!rootFile.includes('durationInFrames={10350}')) failures.push('Duration is not 345 seconds.');
if (!rootFile.includes('width={1920}') || !rootFile.includes('height={1080}')) failures.push('Composition is not 1920x1080.');
if (!rootFile.includes('fps={30}')) failures.push('Composition is not 30 fps.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Static QC passed: disclosure, evidence boundaries, identity scan, duration, canvas, and fps.');
