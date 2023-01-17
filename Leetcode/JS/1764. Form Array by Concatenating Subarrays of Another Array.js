let canChoose = function (groups, nums) {
  let numsString = ',' + nums.toString() + ',';
  for (let numsgroup of groups) {
    let findIndex = numsString.indexOf(`,${numsgroup.toString()},`);
    if (findIndex == -1) return false;
    numsString = ',' + numsString.split(`,${numsgroup.toString()},`).filter((value, index) => index != 0).join(',')
  }
  return true;
};


console.log(canChoose(groups = [[1, -1, -1], [3, -2, 0]], nums = [1, -1, 0, 1, -1, -1, 3, -2, 0]));
console.log(canChoose(groups = [[1, 2, 3], [3, 4]], nums = [7, 7, 1, 2, 3, 4, 7, 7]));
console.log(canChoose([[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2]));
console.log(canChoose([[2, 1]], [12, 1]));