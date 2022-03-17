const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let num = parseInt(data);

process.stdout.write( '' + yigindi(num) );

function yigindi(sum) {
    let arr = Array(n).fill(false);

    sonlar(0, 1, 1, 1, 1, arr, sum)

}

function sonlar(pos, a, b, c, d, arr, sum, count) {
    if (pos > sum) return ;

    if (arr[pos]) return;

    arr[pos] = true;
