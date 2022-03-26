function generate (numRows) {
  if (numRows == 1) return [[1]]
  if (numRows == 2) return [[1], [1, 1]]
  let result = [1, 1], re = [[1], [1, 1]]
  while(numRows > 2) {
    let temp = []
    for (let i = 0; i < result.length - 1; i++)
        temp.push(result[i] + result[i+1])
    temp.unshift(1); temp.push(1)
    numRows -= 1;
    result = temp; re.push(temp);
  }
  return re;
};

console.log(generate(5))