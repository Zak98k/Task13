module.exports = (arr, callback, initial) =>
  initial ?
    arr.reduce(callback, initial)
    :
    arr.reduce(callback)
