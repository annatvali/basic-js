const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const string1 = s1.split('');
  const string2 = s2.split('');
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string2.includes(string1[i])) {
      count++;
      string2.splice(string2.indexOf(string1[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
