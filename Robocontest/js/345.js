const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let num = parseInt(data);

process.stdout.write( '' + yordam_1(num) );

function yordam_1(num) {
    let result = 1n;
    for (let i = 1; i < num; i++) 
        result *= BigInt(i);
    
    let mod = BigInt(10**9);
    return parseInt(result%mod)
}



