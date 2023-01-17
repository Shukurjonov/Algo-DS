function searchInsert(nums, target) {
    let start = 0, end = nums.length - 1, mid = 0;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (nums[mid] == target) return mid 
      else if(nums[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return start;
};


console.log(searchInsert(nums = [1,3,5,6], target = 5))
console.log(searchInsert(nums = [1,3,5,6], target = 2))
console.log(searchInsert(nums = [1,3,5,6], target = 7))