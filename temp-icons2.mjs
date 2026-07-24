import * as icons from 'lucide-react';
const keys = Object.keys(icons);
const matches = keys.filter(k => /git|link|dribb|twitter|facebook|instagram|youtube/i.test(k)).sort();
console.log('count:', keys.length);
console.log('matches:', matches.length);
console.log(matches.join('\n'));
console.log('sample:', keys.slice(0,200).join('\n'));
