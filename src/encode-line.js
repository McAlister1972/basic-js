const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let result = '';
  let count = 0;
  let value = str[0];
  for (i = 0; i < str.length; i++) {
      let item = str[i];
      if (item === value) {
        count = count + 1;
      } else {
        result = result + count + value;
        count = 1;
        value = item;
      }
    }
    result = result + count + value;
    return result.split('').filter(item => item != 1).join('');
}

module.exports = {
  encodeLine
};
