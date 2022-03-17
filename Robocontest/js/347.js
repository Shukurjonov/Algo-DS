const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [a, b] = data.split(" ").map( el => parseInt(el));

process.stdout.write( '' + nisbat_2(a, b) );

function nisbat_2(a, b) {
    let result = 1n;
    for (let i = 1; i <= b + 1; i++) 
        result *= BigInt(a);
    
    let mod = BigInt(10**9 + 7);
    return Number(result % mod);
}