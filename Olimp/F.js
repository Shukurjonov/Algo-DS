// Jumboq
const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let arr = data.split(" ").map(el => parseInt(el)) 
process.stdout.write('' + jumboq(arr));

function jumboq(a) {
        let k = [],
          yi = 0;
        a = a.sort((j, b) => j - b);
        for (const e of a) {
          yi += e;
        }
        k.push(yi / 4 - (a[0] + a[9]));
        k.push(a[1] - k[0]);
        k.push(a[8] - k[0]);
        k.push(a[0] - k[1]);
        k.push(a[9] - k[2]);
        return k.sort( (a, b) => a - b).join(' ');
};