const fs = require('fs');
let data = fs.readFileSync("./input.txt", 'utf-8');

fs.writeFileSync("./output.txt", (multiple(data)).toString(), 'utf-8');

function multiple(str) {
  let a_count = 0, o_count = 0;

  str.split('').forEach(el => {
    if (el.toLowerCase() == 'a') a_count++;
    if (el.toLowerCase() == 'o') o_count++;
  });
  return a_count * o_count;
}