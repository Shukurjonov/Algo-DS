const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

data = data.split('\n');
let n = +data[0];

for (let i = 1; i <= n; i++) {
    let [a, b, c] = data[i].split(' ').map(el => parseInt(el));

    let result = suv(a, b, c) ? "YES" : "NO"
    process.stdout.write( '' + result + '\n');
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function suv(a, b, c) {
    if (a == b)
        return c == a
    if (c > a &&  c > b)
        return false 
    if (c % ( a - b) == 0 || c % a == 0 || c % b == 0) {
        return true
    }
    return c % gcd(a, b) == 0
}
