// A+B
// Ikkita butun son A va B ning yig'indisini hisoblang

const fs = require('fs');
const data = fs.readFileSync('./003.txt', 'utf-8');

let [a, b] = data.split('\n');

a = a.split('').reverse();
b = b.split('').reverse();
let result = a, son = [b]
let len = a.length; 

if (a.length > b.length) {
    len = a.length;
    result = a;
    son = b;
} else {
    len = b.length;
    result = b;
    son = a
}

let i = 0;
let butun = 0;

while ( len > 0) {
    let temp =  +result[i];
    let m = +son[i];
    if (m) {
        result[i] = ( temp +  m + butun ) % 10;
        butun = parseInt( ( temp +  m + butun ) / 10);
    } else {
        result[i] = (temp + butun) % 10;
        butun = parseInt(( temp + butun ) / 10);
    } 
    len--;
    i ++;
}

if (butun) 
    result[result.length] = +butun;

result = result.reverse().join('')
process.stdout.write( '' + result);

/* 

function multply(a, b) {
    a = a.toString().split('').reverse();
    b = b.toString().split('').reverse();
    let result = a, son = [b]
    let len = a.length; 
    
    if (a.length > b.length) {
        len = a.length;
        result = a;
        son = b;
    } else {
        len = b.length;
        result = b;
        son = a
    }
    
    let i = 0;
    let butun = 0;
    
    while ( len >= 0) {
        if (son[i]) {
            let temp =  +result[i];
            result[i] = ( temp +  +son[i] + butun ) % 10;
            butun = parseInt(( +temp + +son[i] ) / 10);
        } else if (result[i]) {
            result[i] = +result[i] + +butun;
            butun = 0;
        } else if(butun) {
            result[i] = +butun;
            butun = 0;
        }
        
        len--;
        i ++;
    }
    
    if (butun) 
    result[result.length] = +butun;
    
    return result.reverse().join('')
}

console.log(multply(125, 9)); */