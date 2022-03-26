// function lengthOfLastWord(s) {
//   s =  s.split(' ').filter( el => el != '');
//   return s[s.length - 1].length
// };

/* var lengthOfLastWord = function(s) {
  let index = s.split(' ').length - 1
  const checkIfSpace = () => {
      if(s.split(' ')[index].length === 0){
          index--
          checkIfSpace()
          }        
  } 
  checkIfSpace()
  return(s.split(' ')[index].length)
}; */

console.log(lengthOfLastWord("   fly me   to   the moon  "))