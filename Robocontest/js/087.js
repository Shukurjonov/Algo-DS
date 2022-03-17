const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

process.stdout.write('' + kun(data))

function kun(chars) {
    data = data.split('\n');
    let arr = data[1].split(" ").map(el => parseInt(el))
    let [day, month] = data[2].split(" ").map(el => parseInt(el))
    let count = 0;
    for (let i = 0; i <= arr.length - month; i++) {
        let sum = 0;
        for (let j = i; j < month + i; j++) {
            sum += arr[j];
        }
        if (sum == day) count ++;
    }
    return count;
}