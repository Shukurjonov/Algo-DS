const fs = require('fs');
let data = fs.readFileSync("./input.txt", 'utf-8');

let objects = JSON.parse(data)
fs.writeFileSync("./output.txt", (sumOfPrimitives(objects)).toString(), 'utf-8');

function sumOfPrimitives(object) {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === 'object') sum += sumOfPrimitives(object[key])
    else if (typeof object[key] === 'number' || typeof object[key] === 'boolean' || typeof object[key] === 'null' || typeof object[key] === 'undefined') sum += Number(object[key])
  }
  return sum
}