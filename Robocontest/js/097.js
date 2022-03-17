const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
console.log(data);
let [n, k] = data.split("\n").map(el => BigInt(el))
console.log((n).toString(2))
console.log((k).toString(2))
process.stdout.write('' + (n & k));
