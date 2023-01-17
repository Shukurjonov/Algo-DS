var average = function(salary) {
  salary = salary.sort( (a, b) => a - b)
  let sum = 0;
  for (let i of salary) sum += i;
  return ((sum - salary[0] - salary[salary.length - 1]) / (salary.length - 2)).toFixed(5)
};

console.log(average([1000,2000,3000]))