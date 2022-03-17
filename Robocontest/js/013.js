const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, k] = data.split(' ').map( (el) => parseInt(el))

process.stdout.write( '' + virus(n, k) );

function virus(n, k) {
    if (n == 0) return 1;
    
    return (k + 1)
}