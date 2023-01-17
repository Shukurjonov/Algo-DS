var countHillValley = function(nums) {
  let res = 0;
  for (let i = 1, j = 0; i < nums.length - 1; ++i)
      if ((nums[j] < nums[i] && nums[i] > nums [i + 1]) || 
          (nums[j] > nums[i] && nums[i] < nums [i + 1])) {
          ++res;
          j = i;
      }            
  return res;
};
/* var countHillValley = function(nums) {
    let u = [...new Set(nums)], result = 0;
    console.log(u);
    for (let i = 1; i < u.length - 1; i++) {
      if ((u[i] > u[i - 1] && u[i] > u[i + 1]) || ((u[i] < u[i - 1] && u[i] < u[i + 1])))
        result ++
    }
    return result
}; */


console.log(countHillValley([6,6,5,5,4,1]))
// console.log(countHillValley([5,7,7,1,7]))