const fs = require('fs');
const a = fs.readFileSync(0, 'utf-8');
let result = 0;
a.split('').map( el => result += parseInt(el))
process.stdout.write( '' + result);