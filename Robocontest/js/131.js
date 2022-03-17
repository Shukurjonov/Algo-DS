const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [a, b, c] = data.split('\n');
let [n, type] = a.split(' ');
let [x0, y0] = b.split(' ').map(el => parseInt(el))
let [x1, y1] = c.split(' ').map(el => parseInt(el))

process.stdout.write('' + shaxmat([n, type, x0, y0, x1, y1]));

function shaxmat(info) {
    type = info[1].toString()
    console.log(type == 'Shoh\r');
    console.log(info);

}  