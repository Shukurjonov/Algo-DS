const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [arr1, arr2] = data.split('\n')

process.stdout.write( '' + (soat(arr2) - soat(arr1)) );

function soat(arr1) { 
    let [a, b, c] = arr1.split(' ').map( el => parseInt(el))
    return a * 3600 + b * 60 + c;
}
