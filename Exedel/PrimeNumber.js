const fs = require('fs');
let data = fs.readFileSync("./input.txt", 'utf-8');

let num = parseInt(data)

fs.writeFileSync("./output.txt", (tub(num)).toString(), 'utf-8');

function tub(number) {
  
  if (number === 1) return false;  
  
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
      break;
    }
  }

  return true
}