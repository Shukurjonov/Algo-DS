const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [n, k] = data.split(" ").map(el => parseInt(el))

process.stdout.write('' + virus3(n, k));

function power(x, y) {
    let res = 1;    
    while (y > 0) {
        if (y & 1) res *= x;
        y = y>>1; 
        x = x*x; 
    }
    return res;
}

function virus3(n, k) {
    if (n == 0) return 0;
    M = 1000000007;
    return (power(k, n) - 1) * power(k-1, M-2) % M;   
}