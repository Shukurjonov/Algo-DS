var moveZeroes = function(nums) {
  let left = 0;
  let length = nums.length;
  
  for(let i = 0; i < length; i++) {
      if (nums[i] !== 0) {
          let temp = nums[i];
          nums[i] =nums[left];
          nums[left] = temp;
          left++;
      }
  }
};

console.log(moveZeroes(nums = [0,1,0,3,12]))
console.log(moveZeroes(nums = [0]))