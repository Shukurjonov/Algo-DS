const fs = require('fs');
let data = parseInt(fs.readFileSync("input.txt", 'utf-8'));


process.stdout.write( '' + bank(data) );

function bank(n) {
    let data = [100, 20, 10, 5, 1];
    let count = 0;
    for (el of data) {
        let temp = parseInt(n / el)
        count += temp;
        n -= temp * el
    }
    
    return count
}