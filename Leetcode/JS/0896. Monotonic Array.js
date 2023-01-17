var isMonotonic = function(nums) {
  let a = nums[0];
  let b = nums.find(el => el != a)
  let conjuction = a > b ? '>': '<'; 
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {continue}
    if (conjuction == '>' && nums[i] < nums[i + 1]) return false; 
    if (conjuction == '<' && nums[i] > nums[i + 1]) return false; 
  }
  return true
};


console.log(isMonotonic([6,5,4,4]))
console.log(isMonotonic([1, 1, 0]))
console.log(isMonotonic([1, 2, 0]))
console.log(isMonotonic([2,3,3,2,4]))