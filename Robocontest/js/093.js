const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

data = data.split('\n');
let n = +data[0]

for (let i = 1; i <= n; i++) {
    process.stdout.write('' + qismSatr(data[i]) + '\n')
}

function qismSatr(chars) {
    let len = chars.length;
    let len2 = [...new Set(chars.split(''))].length
    return len - len2
}