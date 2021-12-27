module.exports = (arr, searchVal) =>{
  const res = [...arr].find(function compareFunc(obj) {
    if (obj instanceof Object) {
      if (Object.keys(obj).length !== 0) {
        for (const val of Object.values(obj)) {
          return compareFunc(val);
        }
      }
    }
    return obj.toString().search(searchVal) !== -1;
  });
  return !!res;
}
