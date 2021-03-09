/*
Given two strings, write a function to determine if the second string
is an anagram of the first. An anagram is a word, phrase, or name
formed by rearranging the letters of another, such as

*/

// mine
function _validAnagram(str1, str2) {
  let freq1 = {};
  let freq2 = {};

  for (let s of str1) {
    freq1[s] = (freq1[s] || 0) + 1;
  }

  for (let s of str2) {
    freq2[s] = (freq2[s] || 0) + 1;
  }

  for (let k in freq1) {
    if (!(k in freq2)) return false;

    if (freq1[k] !== freq2[k]) return false;
  }
  return true;
}

// colts solution

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero (too many of that letter) then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
      // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
    }
  }
  console.log(lookup);
  return true;
}

console.log(validAnagram("aaz", "zza") === false);
console.log(validAnagram("anagram", "nagaram") === true);

// alternate ways to increment hash
// freq1[s] = s in freq1 ? ++freq1[s] : 1;
// freq1[s] = freq1[s] ? ++freq1[s] : 1;
// freq1[s] = freq1[s] ? freq1[s] += 1 : 1;
// freq1[s] = (freq1[s] || 0) + 1;
