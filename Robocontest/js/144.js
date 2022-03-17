BigInt.prototype.mod = function (n) {
    return ((this % n) + n) % n;
  };

const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8');

let [a, b] = data.split(" ").map( el => BigInt(el));
process.stdout.write( '' + mathMod(a, b));

function mathMod(a, b) {
    if (b == 0) return 0
    if (a < 0 && b < 0) { a *= -1n; b *= -1n;}
    if (b < 0) { b *= -1n }
    let result = (a.mod(b)).toString(2).split('0').join('').length;
    return result;
}