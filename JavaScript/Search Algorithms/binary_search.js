/*
Write a function called binarySearch which accepts a sorted array
and a value and returns the index at which the value exists. Otherwise, return -1.
*/

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103) === -1);
console.log(binarySearch([1, 2, 3, 4, 5], 2) === 1);
console.log(binarySearch([1, 2, 3, 4, 5], 3) === 2);
console.log(binarySearch([1, 2, 3, 4, 5], 5) === 4);
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  ) === 2
);
