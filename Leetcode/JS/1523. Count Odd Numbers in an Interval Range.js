var countOdds = function(low, high) {
  low = low % 2 == 0 ? low + 1 : low
  high = high % 2 == 0 ? high - 1 : high
  return parseInt((high - low) / 2) + 1;
};

console.log(countOdds(8, 10))