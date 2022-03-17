const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [n, ...arr] = data.split("\n") 
process.stdout.write('' + karslar(+n, arr));

function karslar(n, arr) {
    let ekub = 1, ekuk = 1;
    for (let i = 1; i <= n; i++) {
        let [surat, maxraj] = arr[i-1].split(' ').map(el => parseInt(el));
        ekub = gcd(ekub, surat)
        ekuk = (ekuk * maxraj) / gcd(ekuk, maxraj)
        
    }
    return `${ekuk} ${ekub}`
}


function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
}