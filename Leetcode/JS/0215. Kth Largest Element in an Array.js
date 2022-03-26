function findKthLargest(nums, k) {
  nums = nums./* filter((value, index, self) => {
    return self.indexOf(value) === index;
  }). */sort((a, b) => a - b);
  if (nums.length <= k) return nums[nums.length - 1];
  return nums[nums.length - k]
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))