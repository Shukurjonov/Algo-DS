function romanNumber(n) {
    let dect = {
        'M'  : 1000,
        'CM' : 900,
        'D'  : 500,
        'CD' : 400,
        'C'  : 100,
        'XC' : 90,
        'L'  : 50,
        'XL' : 40,
        'X'  : 10,
        'IX' : 9,
        'V'  : 5,
        'IV' : 4,
        'I'  : 1,
    }
    let result = '';

    for (let i in dect) {
        let j = 0;
        for (j = 1; j <= parseInt(n / dect[i]); j++) {
            result += i;

        }
        n -= (j - 1) * dect[i]
    }
    return result;
}

const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + romanNumber(n) );
