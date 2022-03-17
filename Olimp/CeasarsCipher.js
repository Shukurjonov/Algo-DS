function rot13(str) {
  let result = '';
  for (let i of str) {
    let code = i.charCodeAt() - 65;
    if (code >= 0 && code <= 25) {
      if (code - 13 < 0) 
        result += String.fromCharCode(26 + code - 13  + 65)
      else 
        result += String.fromCharCode(code - 13 + 65)
    } else result += i
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"))