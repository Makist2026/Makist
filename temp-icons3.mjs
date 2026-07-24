import * as icons from 'lucide-react';
const names = ['Twitter', 'GitHub', 'Linkedin', 'Dribbble', 'TwitterIcon', 'GithubIcon', 'LinkedinIcon', 'DribbbleIcon'];
for (const n of names) {
  console.log(n, Object.prototype.hasOwnProperty.call(icons, n));
}
console.log('find Twitter variants:', Object.keys(icons).filter(k => /twitter|github|linkedin|dribbble/i.test(k)).sort().join('\n'));
