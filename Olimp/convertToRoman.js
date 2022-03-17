function convertToRoman(num) {
  let obj = { 1000 : 'M', 900 : 'CM', 500 : 'D', 400 : 'CD', 100 : 'C', 90 : 'XC', 50 : 'L', 40 : 'XL', 10 : 'X', 9 : 'IX', 5 : 'V', 4 : 'IV', 1 : 'I'}
  let value = [1000, 900, 500, 400, 100, 90,50, 40, 10, 9, 5, 4, 1];
  let result = '';
  for (let i of value) {
    while (num - i >= 0) { 
      num = num - i
      result += obj[i]
    }
  }
  return result;
 }
 

 console.log(convertToRoman(36))
 console.log(convertToRoman(136))
 console.log(convertToRoman(356))
 console.log(convertToRoman(3634))