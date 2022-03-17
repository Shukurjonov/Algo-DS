const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let arr = data.split(' ').map( el => parseInt(el))
let sum = 0;
for (let i of arr) sum += i;

let min = sum - Math.max(...arr);
let max = sum - Math.min(...arr);

process.stdout.write( '' + min + ' ' + max );

