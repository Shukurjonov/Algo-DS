const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');
let [a, b, n] =data.split(' ').map(el => parseInt(el))
function binarSatr(a, b, n) {
    let satr
    if (a > b) {satr = '0'; a-- } else { satr = '1'; b-- }
    n--;
    while (n > 1) { 
        n --; 
        if (satr[satr.length - 1] == 1){ a--; satr += '0'; } else { b--; satr += '1';} 
    }
    
    let genSatr ='';
    genSatr = genSatr.padStart(a, '0');
    genSatr = genSatr.padEnd(a + b, '1');
    let genSatr2 = genSatr.split("").reverse().join("")
    
    if (n == 0) 
        if (satr[satr.length-1] != 0) return  satr + genSatr2; else  return  satr + genSatr;
    if (satr[satr.length-1] != 1) return  satr + genSatr2; else  return  satr + genSatr;   
}
process.stdout.write( '' + binarSatr(a, b, n) );