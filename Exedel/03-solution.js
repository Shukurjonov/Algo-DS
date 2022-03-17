const fs = require('fs');
// const outputArray = fs.readFileSync('input.txt', 'utf-8').split(',').map(number => Number(number));

let count = 0
for (let i = 0; i < outputArray.length - 1; i++) {
  if (outputArray[i] < outputArray[i + 1]) count++
}

fs.writeFileSync('output.txt', String(count));