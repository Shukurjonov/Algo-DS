const fs = require('fs');
let data = fs.readFileSync("./input.txt", 'utf-8');

let func = require('./script1.js');

(async ()=> {
  let result = await func(data);
  fs.writeFileSync("./output.txt", result, 'utf-8');
})()



