const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

process.stdout.write('' + angramma(data));

function angramma(str) {
    str = str.toLowerCase().trim().replace(" ", '')
    let obj = {};
    for (let i of str) 
        if (obj[i]) obj[i] += 1;
        else obj[i] = 1;
    
    let result = fact(str.length);
    for (let i in obj) 
        result /= fact(obj[i])
    return result;
}

function fact(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}