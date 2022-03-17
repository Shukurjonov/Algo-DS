let start = Date.now()
const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let arr = data.split('\n');
let t = parseInt(arr[0])
console.log(t);

for (let i = 1; i <= t; i++) {
    let [n, a, b, c, d] = arr[i].split(" ").map( el => parseInt(el));
    process.stdout.write( '' + PrimeNumber(n, a, b, c, d) + '\n' );
}

function PrimeNumber(n, ...shart) {
    let arr = Array(n).fill(true);

    for (let el of shart) {
        for (let j = el; j <= n; j+=el) {
            arr[j] = false    
        }
    }
    return arr.filter(el => el == true).length - 1
}

let end = Date.now()
console.log(end - start);

Math.PI