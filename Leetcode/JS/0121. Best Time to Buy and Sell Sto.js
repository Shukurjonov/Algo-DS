function maxProfit(prices) {
  let min = Math.min(...prices),
    minIndex = prices.indexOf(min);
  let newArray = prices.slice(minIndex),
    max = Math.max(...newArray);
  return max - min;

};

console.log(maxProfit([2, 4, 1]))