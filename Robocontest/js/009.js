const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, arr] = data.split('\n')

process.stdout.write( '' + yolgizSon(n, arr) );

function yolgizSon(n, arr) {
    arr = arr.split(' ')

    for (let i of arr) 
        if (arr.indexOf(i) == arr.lastIndexOf(i))
            return i
}