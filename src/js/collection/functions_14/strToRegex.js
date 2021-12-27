module.exports = (str) => {
  const lastIndexOf = str.lastIndexOf('/')
  const pattern = str.slice(str.indexOf('/') + 1, (lastIndexOf !== -1) ?
    lastIndexOf
    :
    str.length);
  const flag = (lastIndexOf !== -1) ?
    str.slice(lastIndexOf + 1, str.length)
    :
    null;

  return flag ?
    RegExp(pattern, flag)
    :
    RegExp(pattern);
}
