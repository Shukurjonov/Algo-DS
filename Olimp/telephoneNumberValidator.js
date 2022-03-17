function telephoneCheck(str) {
  if (/^[1-9]\d{2}-\d{3}-\d{4}/.test(str)) return true
  if (/^\(\d{3}\)\d{3}-\d{4}/.test(str)) return true
  if (/^\(\d{3}\)\s\d{3}-\d{4}/.test(str)) return true
  
  if (/^1\(\d{3}\)\d{3}-\d{4}/.test(str)) return true
  if (/^1\s\(\d{3}\)\s\d{3}-\d{4}/.test(str)) return true
  if (/^1-9]\d{2}\s\d{3}\s\d{4}/.test(str)) return true
  if (/^[1-9]\d{9}/.test(str) && str.length == 10 ) return true
  if (/^1\s\d{3}\s\d{3}\s\d{4}/.test(str)) return true
  if (/^1\s\d{3}-\d{3}-\d{4}/.test(str)) return true
  return false
}

console.log(telephoneChech('555-555-5555'))
console.log(telephoneCheck('2 (555) 555-5555'))
console.log(telephoneChech('(555) 555-5555'))
console.log(telephoneChech('555 555 5555'))
console.log(telephoneChech('5055555555'))
console.log(telephoneCheck('5555555555'))

  // let minutSplit = str.split('-');
  // if (minutSplit.length == 3 && minutSplit[0].length == 3 && minutSplit[1].length == 3 && minutSplit[2].length == 4) {
  //   return true
  // }
  // let spaceSplit = str.split(' ');
  // if (spaceSplit.length == 3 && spaceSplit[0].length == 3 && spaceSplit[1].length == 3 && spaceSplit[2].length == 4) {
  //   return true
  // }
  // if (str.length == 10) {
  //   for (let i of str) 
  //     if (isNaN(i)) return false
  //   return true
  // }
