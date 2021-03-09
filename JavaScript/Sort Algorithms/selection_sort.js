function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (var i = 0; i < arr.length; i++) {
    var lowest = i; // defaults to starting position

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j; // lowest index per inner loop
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
