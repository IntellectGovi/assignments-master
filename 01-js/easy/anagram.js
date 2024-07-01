/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function normalise(str){
    return str.toLowerCase().split('').sort().join('');
  }

  return normalise(str1) === normalise(str2);
}

module.exports = isAnagram;
