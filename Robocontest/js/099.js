const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

let n = BigInt(data);

process.stdout.write('' + Factorial(n));

function Factorial(n) {
    if (n + 1n == 4) return 2;
    if (isPrime(n + 1n))
        return n;
    else 
        return 0;

}
function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
      if (p % i === 0n) return false;
    }
    return true
}
