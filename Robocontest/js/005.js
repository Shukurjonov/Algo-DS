const fs = require('fs');
let a = fs.readFileSync(0, 'utf-8');
a = Number(a)

process.stdout.write( '' + kopaytma(a) );

function kopaytma(n) {
    let num = Math.abs(n); 
    if (n == 0) return -1;
    let P = primeFactors(num);
    
    if (n < 0) return P;
    else return P % 2 == 1 ? P += 1 : P;
}

function primeFactors(num) {
    let b = [];
    let count = 1;

    let j = 0;
    while (num % 2 == 0){ j++; num /= 2; }
    if (j) b.push(j);

    for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
        j = 0;
        while (num % i == 0) { j++; num /= i; }
        if (j) b.push(j);
    }
    if ( num > 2 ) b.push(1)

    for (let i of b) count *= i + 1;

    return count;
}