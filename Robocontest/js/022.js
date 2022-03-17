const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + onlar(n) );

function onlar(n) { 

    return parseInt( n / 10)
}
