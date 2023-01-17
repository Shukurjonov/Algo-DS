function convertTime (current, correct) {
  let [ha, ma] = current.split(':'), [hb, mb] = correct.split(':');
  let result = 0;
  if (mb > mb) {
    result += hb-ha;
  }
};

console.log(convertTime(current = "11:00", correct = "11:01"))