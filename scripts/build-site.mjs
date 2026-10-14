import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist', 'site');
const repository = process.env.GITHUB_REPOSITORY || '';
const releaseBase = repository ? `https://github.com/${repository}/releases/latest/download` : '';

await mkdir(output, { recursive: true });
await cp(path.join(root, 'landing.html'), path.join(output, 'index.html'));
await cp(path.join(root, 'index.html'), path.join(output, 'sequencer.html'));
await cp(path.join(root, 'tailwind.css'), path.join(output, 'tailwind.css'));
await cp(path.join(root, 'download-links.js'), path.join(output, 'download-links.js'));
await cp(path.join(root, 'samples'), path.join(output, 'samples'), { recursive: true });
await writeFile(path.join(output, 'download-links.json'), JSON.stringify({ releaseBase }, null, 2));
console.log(`Static landing site built at ${output}`);
