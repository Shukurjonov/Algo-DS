const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [b, a] = data.split(" ").map( el => parseInt(el));


process.stdout.write( a + ' ' + b );
