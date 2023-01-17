/*
* @param {string} s
* @return {string}
*/

/*
function reverseWords (s) {
  s += ' ';
  let result = '';
  let temp = ''
  // console.log(s)
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ' ') temp += s[i]; 
    else {
        result += reverse(temp);
        if (i == s.length - 1) 
            result += ' '
      temp = ''
    } 
  };
  return result;
};

function reverse (word) {
  word = word.split('');
  let start = 0, end = word.length - 1;
  while (start < end) {
    let temp =  word[end]
    word[end] = word[start];
    word[start] = temp;
    start ++;
    end --;
  }
  return word.join('');
}

console.log(reverseWords(s = "Let's take LeetCode contest"))
// console.log(reverse('Salom'))

*/


function reverseWords (s) {
  return s.split(' ').map(el => el.split('').reverse().join('')).join(' ')
};

console.log(reverseWords(s = "Let's take LeetCode contest"))