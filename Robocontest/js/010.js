const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, arr] = data.split('\n')

process.stdout.write( '' + twoMax(n, arr) );

function twoMax(n, arr) {
    arr = arr.split(' ').map( el => parseInt(el)).sort( (a, b) => a - b);

    return arr[n - 1]
}