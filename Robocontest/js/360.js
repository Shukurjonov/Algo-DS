const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [a, b] = data.split(" ").map(el => BigInt(el));

process.stdout.write( '' + birlik_kv(a, b) );

function birlik_kv(a, b) {
    if (a == 1 && b == 1) return 1;
    if (gcd(a, b) == 1) return 2;
    return String((gcd(a, b) + 1n))

}

function gcd(a, b) {
    while(a != 0 & b != 0){
        if (a > b) 
            a = a % b;
        else 
            b = b % a;
    }

    return a + b;
}
