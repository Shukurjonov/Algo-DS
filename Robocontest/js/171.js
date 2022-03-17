const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8').split('\n');

let result = data[1].split(' ').reduce( (ac, el) => ac += +el, 0);
result = Math.abs(result)
process.stdout.write( '' + result);