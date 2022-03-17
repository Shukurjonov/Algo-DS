const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
data = data.split('\n');
let n = +data[0] * 10;
let [a, b] = data[1].split(' ').map(el => parseInt(el * 10))

let result = 'NO';
if (a == n || b == n) result = "YES";
if ( a % 5 == 0 && b % 5 == 0 && a + b == n) result = "YES";

process.stdout.write('' + result)
