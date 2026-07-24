import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
const dir = join(new URL('.', import.meta.url).pathname, 'node_modules', 'lucide-react', 'dist', 'esm', 'icons');
try {
  const files = await readdir(dir);
  const matches = files.filter(name => /twitter|github|linkedin|dribbble|globe/i.test(name));
  console.log(matches.sort().join('\n'));
} catch (error) {
  console.error(error);
}
