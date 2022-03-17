const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let elms =data.split('.').map(el => parseInt(el))

function ipAddress(elms) {
  for (let el of elms) 
    if (!(el >= 0 && el <=256)) return "NO";
  return "YES";
}

process.stdout.write( '' + ipAddress(elms) );