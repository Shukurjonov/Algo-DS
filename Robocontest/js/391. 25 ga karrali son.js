const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let elms = data.split(' ').map(el => parseInt(el))

function matemDars(elms) {
  let N = elms[0], K = elms[1];
  for (let i = 1; i <= K; i++) 
    if (N % 10 == 0) 
        N /= 10;
      else
        N -= 1;
  
  return N; 
  }

process.stdout.write( '' + matemDars(elms) );