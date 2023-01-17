/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
function twoSum (numbers, target) {
  for (let i = 1; i < numbers.length; i++) {
    let j = (binSearch(i, target - numbers[i - 1], numbers))
    if (j != -1) return [i, j + 1]
  } 
};

function binSearch(s, target, arr) {
  let start = s, end = arr.length - 1, mid = 0;
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

console.log(twoSum(numbers = [2,7,11,15], target = 9))
console.log(twoSum(numbers = [2,3,4], target = 6))
console.log(twoSum( [1,2,3,4,4,9,56,90], 8))