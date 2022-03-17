const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8');

let a = parseInt(data);


process.stdout.write( '' + garoyibSon(a));

function garoyibSon(num) {
    let i = 0;
    while (num != 0) {
        i += 1;
        if (i % (rSum(i) ** 2) == 0) num -= 1;
    }
    if (num == 0 ) {
        return i
    }
}

function rSum(n) {
    let result = 0;
    while ( n != 0) {
        result += n % 10;
        n = parseInt(n / 10);
    }

    return result;
}
