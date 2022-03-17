const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let [n, k] = data.split(' ').map( (el) => parseInt(el))

process.stdout.write( '' + virus(n, k) );

function virus(n, k) {
    if (n == 0) return 1;
    
    let d = 1000000007n;
    
    return result % d;
}


function expmod( base, exp ){
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      return Math.pow( expmod( base, (exp / 2), mod), 2);
    }
    else {
      return (base * expmod( base, (exp - 1), mod)) % mod;
    }
  }

