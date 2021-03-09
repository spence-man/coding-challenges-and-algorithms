/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Constraints:
-2^31 <= x <= 2^31 - 1
*/

// const reverse = (n) => {
//   return parseInt([...n.toString()].reverse().join(""));
// };

var reverse = (x) => {
  let negative = x < 0;
  let reversed = 0;

  if (negative) {
    x *= -1;
  }

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (reversed > 2 ** 31 - 1) {
    return 0;
  }
  return negative ? reversed * -1 : reversed;
};

const test = () => {
  console.log(reverse(123) == 321);
  console.log(reverse(-123) == -321);
  console.log(reverse(120) == 21);
  console.log(reverse(0) == 0);
};
