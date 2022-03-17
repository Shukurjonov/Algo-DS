const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + baho(n) );

function baho(n) { 
    if (n < 38) return n;
    let  kn = (parseInt(n / 5) + 1) * 5;
    if ( kn - n < 3)
        return kn;
    else 
        return n
}
