import * as icons from 'lucide-react';
const keys = Object.keys(icons);
const patterns = ['twitter','github','linkedin','dribbble','globe','brand','facebook','instagram','youtube','social'];
for (const p of patterns) {
  const result = keys.filter(k => k.toLowerCase().includes(p));
  if (result.length) {
    console.log(`=== ${p} (${result.length}) ===`);
    console.log(result.sort().join('\n'));
    console.log('');
  }
}
