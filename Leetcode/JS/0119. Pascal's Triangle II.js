function getRow (rowIndex) {
  if (rowIndex == 0) return [1]
  if (rowIndex == 1) return [1, 1]
  let result = [1, 1]
  while(rowIndex >= 2) {
    let temp = []
    for (let i = 0; i < result.length - 1; i++)
        temp.push(result[i] + result[i+1])
    temp.unshift(1); temp.push(1)
    rowIndex -= 1;
    result = temp;
  }
  return result;
};

console.log(getRow(3))