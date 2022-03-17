const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let num = parseInt(data);

process.stdout.write( '' + kabisaYili(num) );

function kabisaYili(n) {
    if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0 )
        return "Kabisa yili"
    return "Kabisa yili emas"
}



