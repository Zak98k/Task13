const strToRegex = require('./strToRegex')
module.exports = (arr, str) => {
  let regex = strToRegex(str);
  return arr.filter(item => (String(item).search(regex) !== -1));
}
