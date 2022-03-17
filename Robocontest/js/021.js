const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, m, k] = data.split(' ').map( (el) => parseInt(el))

process.stdout.write( '' + partalar(n, m, k) );

function partalar(n, m, k) { 

    return Math.ceil(n / 2) + Math.ceil(m / 2) + Math.ceil(k / 2)
}
