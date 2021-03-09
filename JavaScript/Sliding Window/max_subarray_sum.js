/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

 Constraints:
 Time - O(N)
 Space - O(1)
*/

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    // Add the next position and subtract the last position in the window
    // We start at the position we want (num)
    // We subtract the left
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2) === 700);
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39);
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5);
