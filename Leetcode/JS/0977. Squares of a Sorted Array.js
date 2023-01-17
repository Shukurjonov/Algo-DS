/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function sortedSquares(nums) {
    let start = 0; end = nums.length - 1, result = [];
    
    while (start <= end) {
      if (Math.abs(nums[start]) < Math.abs(nums[end])) {
        result.unshift(nums[end]**2);
        end--;
      } else {
        result.unshift(nums[start] ** 2)
        start++;
      }
    }
    return result;
};

console.log(sortedSquares(nums = [-4,-1,0,3,10]));