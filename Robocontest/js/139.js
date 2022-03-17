const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');
data = data.split('\n')
let n = parseInt(data[0])
process.stdout.write('' + tovuq(data[1]) + '\n');

function tovuq(str) {
    let result = []
    result[0] = str.split('1').length
    result[1] = str.split('2').length
    result[2] = str.split('3').length
    result[3] = str.split('4').length
    result[4] = str.split('5').length
    
    let max = Math.max(...result);
    for (let i in result) {
        if (result[i] == max) return +i + 1
    }
}
