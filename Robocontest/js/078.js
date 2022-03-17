const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

let arr = data.split("\n");
let [n, k] = arr[0].split(" ").map(el => parseInt(el))

process.stdout.write('' + covid(BigInt(k), arr[1]));

function covid(k, str) {
    str = str.split(' ').map(el => BigInt(el));
    let temp = 0n;
    for (let i = 0; i < str.length; i++) {
        temp += (BigInt(str[i]) - k)
        if (temp < 0n)
            temp = 0n;
    }
    if (temp > 0n)
        return temp;
    return 0n;
}