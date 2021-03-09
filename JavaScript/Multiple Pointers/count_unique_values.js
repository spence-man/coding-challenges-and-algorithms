// my solution
function _countUniqueValues(arr) {
  if (arr.length == 1) {
    return 0;
  }

  let result = 0;
  let uniqs = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    if (current !== next && !uniqs.includes(current)) {
      uniqs.push(current);
      result++;
    }
  }
  return result;
}

// tips from Colt
// if i equals j, move j up, and cont the compare
// if i does not equal j, move i up and replace with j
// my solution
function _countUniqueValues(arr) {
  let i = 0;
  let j = i + 1;

  if (arr.length == 1) {
    return 1;
  }

  while (j < arr.length) {
    if (arr[i] == arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// colts solution
function countUniqueValues(arr) {
  var i = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(arr);
  }
  return i + 1;
}

// console.log( countUniqueValues([1,1,1,1,1,2]) ); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log( countUniqueValues([0]) ); // 1
// console.log( countUniqueValues([-2,-1,-1,0,1]) );// 4
