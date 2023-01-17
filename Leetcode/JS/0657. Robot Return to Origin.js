var judgeCircle = function(moves) {
  let x = 0, y = 0;
  for (let el of moves) {
    if (el == "R") x += 1;
    if (el == "L") x -= 1;
    if (el == "U") y += 1;
    if (el == "D") y -= 1;
  }
  if (x == 0 && y == 0) return true;
  return false;
};

console.log(judgeCircle('ULD'))