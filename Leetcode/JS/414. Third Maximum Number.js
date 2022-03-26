/* function thirdMax(nums) {
  nums = nums.filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).sort((a, b) => a - b);
  if (nums.length <= 2) return nums[nums.length - 1];
  return nums[nums.length - 3]
}; */




/* var thirdMax = function(nums) {
	const maxs = [];

	for (let num of nums) {
		if (maxs.includes(num)) {
			continue;
		}

		[maxs[0], num] = !maxs[0] || num > maxs[0] ? [num, maxs[0]] : [maxs[0], num];
		[maxs[1], num] = !maxs[1] || num > maxs[1] ? [num, maxs[1]] : [maxs[1], num];
		[maxs[2], num] = !maxs[2] || num > maxs[2] ? [num, maxs[2]] : [maxs[2], num];
	}

	return maxs[2] ?? maxs[0];
}; */



function thirdMax(nums) {
  nums = nums.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })
  let firstMax = -Infinity
  let secondMax = -Infinity
  let thirdMax = -Infinity
  
  for(let n of nums){
    if(n === firstMax || n === secondMax || n === thirdMax) continue
    
    if(firstMax < n){     
      thirdMax = secondMax; secondMax = firstMax; firstMax = n;
    } else if(secondMax < n){
      thirdMax = secondMax; secondMax = n;
    } else if(thirdMax < n) 
      thirdMax = n
  }
  
  return thirdMax === -Infinity ? firstMax :thirdMax
};

console.log(thirdMax([3,2,1,1]))