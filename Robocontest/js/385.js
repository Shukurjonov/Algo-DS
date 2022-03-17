const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [a, b] =data.split(' ').map( el => parseInt(el))

process.stdout.write( '' + sayohat(a, b) );

function sayohat(a, b) {
    let value = 7 - Math.max(a, b);
    if (value == 2) return '1/3';
    if (value == 3) return '1/2';
    if (value == 4) return '2/3';
    if (value == 6) return '1/1';
    return `${value}/6`
}