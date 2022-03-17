const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + uyin(n) );

function tub(n) {
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
        if (primeArray[i]) primeNum.push(i)
    return primeNum.length;
}

function uyin(n) {
    if (tub(n) % 2 == 1)
        return 'Ali'
    else
        return 'Bobur'

}