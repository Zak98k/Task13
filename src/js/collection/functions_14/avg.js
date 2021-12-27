module.exports = (arr, skipNaN = false) => {
  let numArr = arr.filter((item) => !isNaN(parseFloat(item)));
  let sum = numArr.reduce((sum, item) => (sum += item), 0);
  return skipNaN ?
    sum / arr.length
    :
    sum / numArr.length;
}
