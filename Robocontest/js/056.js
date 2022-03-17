const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8').split('\n');
n = Number(data[0])

let arr = [1n]
let a = b = c = 0n
const bigIntMin = (...args) => args.reduce((m, e) => e < m ? e : m);

while (true) {
    let next = bigIntMin(2n * arr[a], 3n * arr[b], 5n * arr[c])
    arr.push(next)
    if (next === 2n * arr[a]) a = a + 1n
    if (next === 3n * arr[b]) b = b + 1n
    if (next === 5n * arr[c]) c = c + 1n
    if (arr.length > 12500) break
}

for (let i = 1; i <= n; i++) {
    process.stdout.write( '' + arr[Number(data[i]) - 1] + '\n')
}