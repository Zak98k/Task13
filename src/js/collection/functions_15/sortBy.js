const sortAscending = require('./sortAscending')
const byFieldAscending = require('./byFieldAscending')

module.exports = (arr, field, compareFunction = byFieldAscending(field)) =>
  arr.sort(compareFunction)

