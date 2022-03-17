let isValid = function(s) {
  const stack =[];
  const parentheses = s.split("");
  const isOpeningBrace ={
      '(': true,
      '{': true,
      "[": true,
  }
  
  const combo = {
      ')': '(',
      '}': '{',
      ']': '['
  }
  
  for(let char of parentheses) 
      if(isOpeningBrace[char]) stack.push(char);
      else {
        let popedChar = stack.pop();
         if(popedChar !== combo[char]) {
             return false;
         }
      }

  if(stack.length) return false;
  return true;
};

console.log(isValid('{(){}()()()}'))