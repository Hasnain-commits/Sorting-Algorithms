function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);
    quickSort(arr, left, pivot-1);
    quickSort(arr, pivot+1, arr.length-1);
  }
  return arr;
}

function pivotHelper(arr, start=0, end=arr.length-1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
