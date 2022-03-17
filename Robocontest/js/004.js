const fs = require('fs');
const data = fs.readFileSync('./003.txt', 'utf-8');

let [a, b] = data.split(' ').map(x => parseInt(x));
process.stdout.write( '' + a * b);
