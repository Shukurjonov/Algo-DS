const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let sekund = data;

process.stdout.write( '' + soat(sekund) );

function soat(sekund) { 
    let second = Number(BigInt(sekund) % 86400n);

    let result = '';
    let h = parseInt( second / 3600 );
    second -= 3600 * h;
    let m = (parseInt( second / 60 )).toString().padStart(2, 0); 
    second -= m * 60;
    second = second.toString().padStart(2, 0);

    result = h + ':' + m + ':' + second;

    return result;
}
