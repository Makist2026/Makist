const e = require('lucide-react');
console.log(Object.keys(e).filter(n => /(twitter|github|linkedin|dribbble)/i.test(n)).sort().join('\n'));
