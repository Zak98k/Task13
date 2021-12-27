const sortAscending = require('./sortAscending');
module.exports = (arr, compareFunction = sortAscending) => arr.sort(compareFunction);


