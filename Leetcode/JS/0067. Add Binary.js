function addBinary(a, b) {
  a = a.split('').reverse().map(el => parseInt(el)); 
  b = b.split('').reverse().map(el => parseInt(el));
  let len = Math.max(a.length, b.length),
      num = 0, i = 0,
      basis = 2, aSon = 0, bSon = 0;
      if (len == b.length)  {[a, b] = [b, a]}
  while (len != 0) {
    aSon = a[i] ? a[i] : 0;
    bSon = b[i] ? b[i] : 0;
    a[i] = ( aSon + bSon + num) % basis;
    num = parseInt(( aSon + bSon + num) / basis);
    i++;
    len--;
  }
  
  if (num) a.push(num)
  return a.reverse().join('')
};

console.log(addBinary('1000001', '1011'));
console.log(addBinary(a = "1010", b = "1011"));
console.log(addBinary(a = "11", b = "1"));