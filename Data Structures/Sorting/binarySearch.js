// function binarySearch(a, item, low, high) {
//   if (high <= low) 
//     return item > a[low] ? (low + 1) : low;

//   let mid = parseInt((low + high) / 2);

//   if (item == a[mid]) mid + 1;

//   if (item > a[mid]) 
//     return binarySearch(a, item, mid + 1, high);
  
//   return binarySearch(a, item, low, mid - 1);
// }

console.time()
function binarySearch(a, item, low, high)
{
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (item == a[mid])
            return mid + 1;
        else if (item > a[mid])
            low = mid + 1;
        else
            high = mid - 1;
    }
 
    return low;
}

function insertionSort(arr) {
  let i, loc, j, selected;

  for (i = 1; i < arr.length; ++i) {
    j = i - 1;
    selected = arr[i];
    loc = binarySearch(arr, selected, 0, j);
    // while (j >= 0 && arr[j] > selected) {
    while (j >= loc) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = selected;
  }
  return arr
}


console.log(insertionSort([40, 2, 50, 4, 7, 9, 10, 0]))

// console.log(binarySearch([40, 2, 50, 4, 7, 9, 10, 0], 50, 0, 8))

console.timeEnd()