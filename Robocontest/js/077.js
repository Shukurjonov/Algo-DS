const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [x, y] = data.split(" ").map(el => parseInt(el))

process.stdout.write( '' + aqlTishi(x, y) );

function aqlTishi(x, y) { 

    let zarar = 100;
    let result = 0;
    while (zarar > 0) {
        zarar -= x;
        result += 1;
        if (zarar <= 0) break;
        zarar += 3 * y;
        if (zarar > 100) zarar = 100;
    }
   
    return result;
}
