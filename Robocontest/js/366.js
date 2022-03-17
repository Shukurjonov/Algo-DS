const fs = require('fs');
const data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)
process.stdout.write( '' + ichkiBurchak(n) );


function ichkiBurchak(n) {
    
    let bur = (n - 2) * 180;

    return bur;
}