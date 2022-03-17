const fs = require('fs');
let data = fs.readFileSync("./input.txt", 'utf-8');

let nums = data.split(',')
fs.writeFileSync("./output.txt", (nested(nums)).toString(), 'utf-8');

function nested(numbers) {

  let son0 = Array(numbers[0].length).fill(0);
  let son1 = Array(numbers[0].length).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    let str = numbers[i].toString();
    for (let el = 0; el < str.length; el++) {
      if (str[el] == '0') son0[el]++
      else son1[el]++
    }
  }
  let result = 0
  let daraja = numbers[0].length - 1;
  for (let index = 0; index <= daraja; index++) {
    if (son1[index] > son0[index]) result += 2 ** (daraja - index)
  }  
  return result;
}