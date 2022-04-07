function climbStairs(n) {
   let oneCount = n, twoCount = parseInt(n/2);
   let result = 1 + +(twoCount == n / 2)
   return result
};

console.log(climbStairs(4))