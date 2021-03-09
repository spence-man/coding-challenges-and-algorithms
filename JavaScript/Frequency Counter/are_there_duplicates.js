/*
 Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 and checks whether there are any duplicates among the arguments passed in.
 You can solve this using the frequency counter pattern OR the multiple pointers pattern.

 Restrictions:
 Time - O(n)
 Space - O(n)

 Bonus:
 Time - O(n log n)
 Space - O(1)
*/

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// alt
function _areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3) === false);
console.log(areThereDuplicates(1, 2, 2) === true);
console.log(areThereDuplicates("a", "b", "c", "a") === true);
