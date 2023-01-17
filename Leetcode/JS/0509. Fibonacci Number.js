/**
* @param {number} n
* @return {number}
*/
function fib(n) {
  let a = 0, b = 1;
  if (n == 0) return a;
  if (n == 1) return b;
  while (n >= 1) {
    let temp = a;
    a = a + b;
    b = temp; 
    n--;
  }
  return a;
};

console.log(fib(3))