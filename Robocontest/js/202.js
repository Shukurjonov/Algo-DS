const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
data = (+data).toString()
let dict = {
    '0' : 6,
    '1' : 2,
    '2' : 5,
    '3' : 5,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 3,
    '8' : 7,
    '9' : 6,
}
let result = 0;
for (let el of data) {
    result += dict[el]
}
process.stdout.write('' + result)
