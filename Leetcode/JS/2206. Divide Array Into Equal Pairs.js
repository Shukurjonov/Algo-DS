function divideArray (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]]) obj[nums[i]] += 1;
      else obj[nums[i]] = 1;
    }
    for (let i of Object.values(obj)) {
      if (i % 2 != 0) return false
    }
    return true;
};

console.log(divideArray(nums = [3,2,3,2,2,2]))