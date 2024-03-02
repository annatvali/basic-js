const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let digits = str.split('');
  let max = 0;

  for (let i = 0; i < digits.length; i++) {
    let newDigits = [...digits];
    newDigits.splice(i, 1);
    let newNum = Number(newDigits.join(''));

    if (newNum > max) {
      max = newNum;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
