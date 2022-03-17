function palindrome(str) {
  let newStr = ''
  str = str.toLowerCase()
  for (let el of str){
    let code = el.charCodeAt() 
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) 
      newStr += el
  }

  console.log(newStr)
  if (newStr == newStr.split('').reverse().join(''))
    return true;
  return false;
}


console.log(palindrome("1 eye for of 1 eye."))