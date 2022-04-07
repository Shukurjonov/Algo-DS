/* var containsDuplicate = function(nums) {
  let newNum = nums.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return newNum.length != nums.length
}; */


const containsDuplicate = function(nums) {
  return nums.length === new Set(nums).size ? false : true ;
};
