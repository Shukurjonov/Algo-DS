const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let arr =data.split('\n')[1]

function chontak(arr) {
    arr = arr.split(' ').map((el) => parseInt(el))
    let obj = {};
    for (let el of arr) {
        if (obj[el]) obj[el] += 1;
        else obj[el] = 1;
    }
    return Math.max(...Object.values(obj))
}


process.stdout.write( '' + chontak(arr) );
