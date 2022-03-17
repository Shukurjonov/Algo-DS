const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + toshlar_oyini(n) );

function toshlar_oyini(n) { 
   
    if ( n % 2 == 0)
        return "Second player";
    else 
        return "First player";
}
