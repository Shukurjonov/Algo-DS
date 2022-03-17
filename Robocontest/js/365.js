const fs = require('fs');
const data = fs.readFileSync("input.txt", 'utf-8');

let n = parseInt(data)
process.stdout.write( '' + yordam(n) );

function yordam(n) {
    if((n+1)%4==0){
        return parseInt( (Math.sqrt(n + 4) - 1) / 4);
    }
    return -1
}