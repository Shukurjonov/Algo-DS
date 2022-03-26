function maxSubArray(nums) {
  let currentSum = 0; 
  let max = -Infinity; 

  for(let i = 0; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      if(currentSum > max) max = currentSum;
  }
  return max;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));