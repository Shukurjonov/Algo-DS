let ceasarCipher = function (amount, str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
};

const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let arr = data.split('\n');
let t = parseInt(arr[0])
console.log(t);


process.stdout.write( '' + ceasarCipher(t, arr[1] +"\n"));
console.log("Zcdctpk_ujkhtncd_pkoc_sknct_gfkpi_Ugbct");