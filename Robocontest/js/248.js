const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [a, b] = data.split(' ').map(el => BigInt(el))

let result = a;

while (a > b) {
    a = BigInt(a / b);
    result += a
}
if (result % b == 0n) result++
process.stdout.write('' + result)
