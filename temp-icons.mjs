import * as icons from 'lucide-react';
console.log(Object.keys(icons).filter(n => /(twitter|github|linkedin|dribbble)/i.test(n)).sort().join('\n'));
