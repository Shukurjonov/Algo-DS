function twoSum (numbers, target) {
  let ns = [...numbers];
  numbers = numbers.sort( (a, b) => a - b)
  for (let i = 0; i < numbers.length; i++) {
    let j = (binSearch(i, target - numbers[i], numbers))
    if (j != -1 && i != j) {
      console.log(numbers[i], numbers[j])
      let a = ns.indexOf(numbers[i])
      let b = ns.indexOf(numbers[j])
      
      return [ns.indexOf(numbers[i]), ns.indexOf(numbers[j], i)]
    }
  } 
};

function binSearch(s, target, arr) {
  let start = s, end = arr.length - 1, mid ;
  while(start <= end) {
    mid = Math.round((start + end) / 2);
    if (arr[mid] == target) return mid
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// console.log(twoSum([0,4,3,0], 0))
// console.log(twoSum(nums = [2,7,11,15], target = 9))
// console.log(twoSum(nums = [3,2,4], target = 6))
console.log(twoSum( [5,75,25], 100))