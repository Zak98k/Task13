module.exports = ([...arr], val) => {
  let key = arr.findIndex(val);
  return key === -1 ? [] : arr.slice(key);
}
