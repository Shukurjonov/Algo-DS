const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + qoylar(n) );

function qoylar(n) { 
    if (n % 4 != 0)
        return -1;
    else 
        return parseInt( n / 2)
}
