const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

let [a, b] = data.split(' ');

process.stdout.write( '' + oxirgiRaqam(a, b));

function oxirgiRaqam(a, b) {
    if (b == 0) return 1
    a = Number(a[a.length - 1]);

    let number = {
        0 : [0], 
        1 : [1],
        2 : [6, 2, 4, 8],
        3 : [1, 3, 9, 7],
        4 : [6, 4],
        5 : [5],
        6 : [6],
        7 : [1, 7, 9, 3],
        8 : [6, 8, 4, 2],
        9 : [1, 9]
    }
    return number[a][BigInt(b) % BigInt(number[a].length)]
}
