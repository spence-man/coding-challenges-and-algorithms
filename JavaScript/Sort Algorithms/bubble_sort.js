function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // The largest item will be pushed to the end and thus be sorted
  // Each pass over, we will decrement by one to skip that already sorted item
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));
// => [1,2,3,4,5]
