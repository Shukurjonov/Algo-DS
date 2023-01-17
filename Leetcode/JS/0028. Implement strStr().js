// var strStr = function(haystack, needle) {
//   if (needle == '') return 0
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     let word = haystack.split('').splice(i, needle.length).join('');
//     if (word == needle) return i 
//   }
//   return -1;
// };



var strStr = function(haystack, needle) {
  if(!needle.length) return 0;
  if(!haystack.includes(needle)) return -1;
  return haystack.split(`${needle}`)[0].length;
};

console.log(strStr( haystack = "hello", needle = "ll"))
console.log(strStr( haystack = "aaaaa", needle = "bba"))
console.log(strStr(haystack = "", needle = ""))
