const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [n, m] = data.split(' ').map( el => parseInt(el))


let result = (m * n * (m + n - 2) / 2);
let mod = 10**9 + 7;
if (result == 0) process.stdout.write('' + (-1))
else process.stdout.write('' + (result % mod))
