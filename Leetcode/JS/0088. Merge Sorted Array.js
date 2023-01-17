/**
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/
function merge (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m)
  while(n != 0) {
    nums1 = concatArr(nums1, nums2.shift())
    n--;
  }
  return nums1
};

function concatArr(arr, element) {
  let index = binSearch(arr, element);
  return addIndex(arr, index, element);
}

function binSearch(arr, target) {
  let start = 0, end = arr.length - 1, mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}

function addIndex(arr, index, element) {
  for (let i = arr.length - 1; i >= index; i--){
    arr[i + 1] = arr[i];
  }
  arr[index] = element 
  return arr;
}


console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0))