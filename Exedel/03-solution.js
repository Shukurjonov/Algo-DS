const fs = require('fs');
// const inputArray = fs.readFileSync('input.txt', 'utf-8').split(',').map(number => Number(number));

let count = 0
for (let i = 0; i < inputArray.length - 1; i++) {
  if (inputArray[i] < inputArray[i + 1]) count++
}

fs.writeFileSync('output.txt', String(count));