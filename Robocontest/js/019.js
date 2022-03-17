const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, k] = data.split(' ').map( (el) => parseInt(el))

process.stdout.write( '' + niqob(n, k) );

function niqob(n, k) { 
    return parseInt(k / n)
}
