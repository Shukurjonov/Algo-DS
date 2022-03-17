const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [n, elms] = data.split('\n')
function EKUB2(n, elms) {
  let result = []
  let nums = elms.split(' ').map(el => parseInt(el));

  for (let i = 0; i < n; i++) {
    let el = nums[i];
    result.push(parseInt(el / 2));
  }
  return result.join('\n');
}

process.stdout.write( '' + EKUB2(n, elms) );