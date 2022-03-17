const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [a, b, c] = data.split(" ").map( el => parseInt(el))


process.stdout.write( '' + kvadradTenglama(a, b, c) );

function kvadradTenglama(a, b, c) {
    let result = '';

    let D = b * b - 4 * a * c;

    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    result = x1.toFixed(4);
    if ( D > 0) {
        let x2 =  (-b - Math.sqrt(D)) / (2 * a);
        result += ' ' +x2.toFixed(4)
    }
    return result;
}