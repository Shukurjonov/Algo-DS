function findDifference(nums1, nums2) {
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]
  
  let a = nums1.filter( el => (nums2.indexOf(el) == -1));
  let b = nums2.filter( el => (nums1.indexOf(el) == -1));
  return [a, b];
};

