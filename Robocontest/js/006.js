console.timeStamp()
const fs = require('fs');
let a = fs.readFileSync("./test.txt", 'utf-8');
a = Number(a)

process.stdout.write( '' + dasturchilarKuni(a) );

function dasturchilarKuni(n) {
    let result
    if ( n % 400 == 0 || ( n % 4 == 0 && n % 100 != 0))
        result = `12/09/`;
    else 
        result = `13/09/`;
    
    return result + n.toString().padStart(4, '0')
}

console.timeEnd()   