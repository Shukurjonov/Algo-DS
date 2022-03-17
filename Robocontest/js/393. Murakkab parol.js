const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

function hardPass(pass) {
  if (pass.length < 3) return 6 - pass.length;
  if (pass.length < 6) {

  } 
    

}


function isNumber(str) {
  return str.test(/0-9/g)
}

function isLowerStr(str) {

}

function isUpperStr(str) {

}


process.stdout.write( '' + hardPass(data) );