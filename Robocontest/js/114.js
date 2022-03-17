const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

let [a, b, c, d] = data.split(' ').map( el => +el);

process.stdout.write('' + kinguru(a, b, c, d));

function kinguru(x1, v1, x2, v2) {
    if (x1 == x2) return "YES";
    if (v1 == v2) return "NO";
    let t = (x2 - x1) / (v1 - v2);
    if (t > 0 && Number.isInteger(t)) return "YES";
    return "NO"
}
