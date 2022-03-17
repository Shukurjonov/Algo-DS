const fs = require('fs');
let n = parseInt(fs.readFileSync('input.txt', 'utf-8'));

let b = Math.log(Number(n))
let result = n * ( b + Math.log(b) - 1 + (Math.log(b) - 2 ) / b - ((Math.pow(Math.log(b), 2) - 6 * Math.log(b) + 11 ) / (2*Math.pow(b, 2))));

process.stdout.write('' + result)
