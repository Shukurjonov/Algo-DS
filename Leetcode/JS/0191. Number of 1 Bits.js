var hammingWeight = function(n) {
  return String(n.toString(2)) 
         .split('')
         .reduce((a,b) => Number(a)+Number(b));
};