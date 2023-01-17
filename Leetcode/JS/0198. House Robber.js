/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let mxe = 0, mxi = 0;
  for (let i of nums) {
    [mxe, mxi] = [mxi, Math.max(mxi, mxe + i) ]
  }
  return Math.max(mxe, mxi)
};

console.log(rob(nums = [1,2,3,1]))
console.log(rob( nums = [2,7,9,3,1]))
console.log(rob( nums = [2,1,1,2]))