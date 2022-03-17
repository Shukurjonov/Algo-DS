const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

let n = BigInt(data);

process.stdout.write('' + countFunc(n, 0));

function countFunc(n, count) {
    if (n == 1) return count
    count++
    if (n % 3n == 0) return countFunc(n / 3n, count)
    if (n % 3n == 1) return countFunc(2n*n + 1n, count)
    if (n % 3n == 2) return countFunc(2n*n - 1n, count)
}