const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

data = data.split("\n");
let [s, t]= data[0].split(' ').map(el => parseInt(el));
let [a, b]= data[1].split(' ').map(el => parseInt(el));

process.stdout.write('' + tekshir(s, t, a, data[3]) + '\n');
process.stdout.write('' + tekshir(s, t, b, data[4]) + '\n');

function tekshir(s, t, nuqta, arr) {
    return arr.split(' ').filter(el => s <= nuqta + parseInt(el) && nuqta + parseInt(el) <= t ).length;
}