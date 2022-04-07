function merge(arr, leftHalf, rightHalf){
  let i = 0, j = 0, k = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      arr[k] = leftHalf[i]; i++;
    } else {
      arr[k] = rightHalf[j]; j++;
    }
    k++;
  }

  while (i < leftHalf.length) {arr[k] = leftHalf[i]; i++; k++};
  while (j < rightHalf.length) { arr[k] = rightHalf[j]; j++; k++};
}

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return;

  let midIndex = Math.ceil(len / 2);
  let leftHalf = [], rightHalf = [];
  
  for (let i = 0; i < midIndex; i++)
    leftHalf.push(arr[i]); 
  
  for (let i = midIndex; i < len; i++) 
    rightHalf.push(arr[i]);
  
  mergeSort(leftHalf)
  mergeSort(rightHalf)

  // merge
  merge(arr, leftHalf, rightHalf);
};

let arr = [8, 9, 58, 4, 1, 63]
mergeSort(arr)
console.log(arr)