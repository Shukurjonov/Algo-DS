var search = function(nums, target) {
  let start = 0, end = nums.length - 1;
  while(start <= end) {
      let mid = start + parseInt((end - start)/2);
      if(nums[mid] == target) return mid;
      else if(nums[mid] < target) start = mid + 1;
      else end = mid - 1;
  }
  return -1;
};

console.log(search(nums = [-1,0,3,5,9,12], target = 9))
// console.log(search(nums = [-1,0,3,5,9,12], target = 2))