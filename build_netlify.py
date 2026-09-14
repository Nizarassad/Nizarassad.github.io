"""Build the dedicated AI Tools Lab site without changing the portfolio pages."""
from pathlib import Path
import re
import shutil
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'dist'
ORIGIN = 'https://ai-tools-lab.netlify.app'
HELD = 'elevenlabs-vs-kokoro-tts-2026.html'
if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir()
shutil.copytree(ROOT / 'ai-tools', OUT / 'ai-tools')
shutil.copy2(ROOT / 'ai-tools.html', OUT / 'ai-tools.html')
(OUT / 'ai-tools' / HELD).unlink()
for file in OUT.rglob('*.html'):
    html = file.read_text()
    html = html.replace('https://nizarassad.github.io', ORIGIN)
    html = re.sub(r'<a\b[^>]*href="[^"]*' + re.escape(HELD) + r'"[^>]*>.*?</a>', '', html, flags=re.S)
    if file.name == 'privacy.html':
        html = html.replace('Effective: September 8, 2026', 'Effective: September 14, 2026')
        html = html.replace('This site is hosted using GitHub Pages. Like most hosting infrastructure, GitHub may process technical request information needed to deliver and secure the service. GitHub\'s own privacy terms govern that processing.', 'This edition of AI Tools Lab is hosted by Netlify. Netlify may process technical request information needed to deliver and secure the site. See <a href="https://www.netlify.com/privacy/">Netlify’s privacy policy</a> for its processing practices.')
    file.write_text(html)
(OUT / 'robots.txt').write_text(f'User-agent: *\nAllow: /\nSitemap: {ORIGIN}/sitemap.xml\n')
ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
ET.register_namespace('', ns)
root = ET.Element(f'{{{ns}}}urlset')
for page in sorted(OUT.rglob('*.html')):
    item = ET.SubElement(root, f'{{{ns}}}url')
    ET.SubElement(item, f'{{{ns}}}loc').text = ORIGIN + '/' + page.relative_to(OUT).as_posix()
ET.ElementTree(root).write(OUT / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
print(f'Built {len(list(OUT.rglob("*.html")))} HTML pages for AI Tools Lab.')
