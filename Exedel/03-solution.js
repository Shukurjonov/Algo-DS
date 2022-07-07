const fs = require('fs');
<<<<<<< Updated upstream
// const outputArray = fs.readFileSync('input.txt', 'utf-8').split(',').map(number => Number(number));

let count = 0
for (let i = 0; i < outputArray.length - 1; i++) {
  if (outputArray[i] < outputArray[i + 1]) count++
=======
// const input = fs.readFileSync('input.txt', 'utf-8').split(',').map(number => Number(number));

let count = 0
for (let i = 0; i < input.length - 1; i++) {
  if (input[i] < input[i + 1]) count++
>>>>>>> Stashed changes
}

fs.writeFileSync('output.txt', String(count));