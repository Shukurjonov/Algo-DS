const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let num = parseInt(data)

process.stdout.write( '' + tub(num) );

function tub(num) {
    let n = parseInt(Math.sqrt(num))
    let primeArray = Array(n+1).fill(true);
    let upperLimit = Math.sqrt(n)

    for (let i = 2; i <= upperLimit; i++) {
        if (primeArray[i]) {
            for (let j = i * i; j <= n; j += i) {
                primeArray[j] = false;
            }
        }
    }

    let primeNum = []
    for (let i = 2; i <= n; i++)
        if (primeArray[i]) 
            if (i * i < num)
                primeNum.push(i)
    return primeNum.length;
}
