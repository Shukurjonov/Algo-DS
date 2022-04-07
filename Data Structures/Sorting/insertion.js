function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j], i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5,2,6,4,10,1]));