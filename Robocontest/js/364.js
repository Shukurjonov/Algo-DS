const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let arr = data.split("\n").map( el => parseInt(el))

for (let i = 1; i <= arr[0]; i++) {
    process.stdout.write( '' + sanoqSistema(arr[i]) + '\n');
}

function sanoqSistema(num) {
    let numBin = num.toString(2);
    let numOct = num.toString(8);
    let numHex = num.toString(16);

    let obj = {
        '10' : 'a', '11' : 'b', '12' : 'c', '13' : 'd', '14' : 'e', '15' : 'f', '16' : 'g', '17' : 'h', '18' : 'i', '19' : 'j', '20' : 'k', 
        '21' : 'l', '22' : 'm', '23' : 'n', '24' : 'o', '25' : 'p', '26' : 'q', '27' : 'r', '28' : 's', '29' : 't', '30' : 'u', '31' : 'v',
        '32' : 'w', '33' : 'x','34' : 'y', '35' : 'z'
    }
    let num36 = ''
    while (num != 0) {
        let qoldiq = num % 36;
        num = parseInt(num / 36);
        if (qoldiq < 10)
            num36 = qoldiq + num36;
        else 
            num36 = obj[qoldiq] + num36;
    }
    return numBin + ' ' + numOct + ' ' + numHex + ' ' + num36;
}