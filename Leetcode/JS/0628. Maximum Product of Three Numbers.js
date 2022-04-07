let maximumProduct = function(nums) {
  nums = nums.sort( (a, b) => a - b);
  let n = nums.length - 1, oldMax = nums[n] * nums[n - 1] * nums[n - 2]
  let lastMax = nums[n] * nums[1] * nums[0] 

  return oldMax > lastMax ? oldMax : lastMax
};


console.log(maximumProduct([-100,-98,-1,2,3,4]))