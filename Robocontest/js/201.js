const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let a = +data

let result = parseInt(a / 2) + 1;
process.stdout.write('' + result)
