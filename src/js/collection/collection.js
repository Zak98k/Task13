//# region import functions_13

const make = require('./functions_13/make');
const reduce = require('./functions_13/reduce');
const filter = require('./functions_13/filter');
const map = require('./functions_13/map');
const toJSON = require('./functions_13/toJSON');
const every = require('./functions_13/every');
const indexOf = require('./functions_13/indexOf');
const toQueryString = require('./functions_13/toQueryString');
const isEmpty = require('./functions_13/isEmpty');

//#endregion

//# region import functions_14

const find = require('./functions_14/find');
const avg = require('./functions_14/avg');
const chunk = require('./functions_14/chunk.js');
const skipUntil = require('./functions_14/skipUntil');
const contains = require('./functions_14/contains');
const get = require('./functions_14/get');
const normalize = require('./functions_14/normalize');
const pluck = require('./functions_14/pluck');
const unique = require('./functions_14/unique');
const fill = require('./functions_14/fill');

//#endregion

//# region import functions_15

const sort = require('./functions_15/sort');
const sortBy = require('./functions_15/sortBy');

//#endregion

//# region import functions_17
const {Pagination} = require('../pagination/pagination');
const paginate = require('../pagination/functions_16/paginate');

//#endregion
function Collection(arr) {
  if (!Array.isArray(arr)) {
    return "Data is not array!";
  }
  if (!new.target) {
    return new Collection(arr);
  }
  this.collectionContent = [...arr];
  this.length=this.collectionContent.length

}

//# region static method 13
Collection.make = (arr = []) => new Collection(make(arr))

Collection.map = (arr, callback) => new Collection(map(arr, callback))

Collection.filter = (arr, callback) => new Collection(filter(arr, callback))

Collection.reduce = (arr, callback, initial) => reduce(arr, callback, initial)

Collection.every = (arr, callback) => every(arr, callback)

Collection.indexOf = (arr, searchElement, fromIndex = 0) =>
  indexOf(arr, searchElement, fromIndex)

Collection.toJSON = arr => toJSON(arr)

//Collection.toQueryString = (arr) =>toQueryString(arr)

Collection.isEmpty = arr => isEmpty(arr)
//#endregion

//#region object methods 13
Collection.prototype.map = function (callback) {
  return new Collection(map(this.collectionContent, callback));
};
Collection.prototype.filter = function (callback) {
  return new Collection(filter(this.collectionContent, callback));
};
Collection.prototype.reduce = function (callback, initial) {
  return reduce(this.collectionContent, callback, initial);
};
Collection.prototype.transform = function (callback) {
  this.collectionContent = map(this.collectionContent, callback);
  return this
};
Collection.prototype.sanitize = function (callback) {
  this.collectionContent = filter(this.collectionContent, callback);
  return this;
};
Collection.prototype.every = function (callback) {
  return every(this.collectionContent, callback);
};
Collection.prototype.indexOf = function (searchElement, fromIndex = 0) {
  return indexOf(this.collectionContent, searchElement, fromIndex);
};
Collection.prototype.toJSON = function () {
  return toJSON(this.collectionContent);
};
Collection.prototype.toQueryString = function () {
  return toQueryString(this.collectionContent);
};
Collection.prototype.toString = function () {
  return this.collectionContent.toString();
};
Collection.prototype.isEmpty = function () {
  return isEmpty(this.collectionContent);
};
//#endregion

//# region static method 14
Collection.find = (arr, regex) => new Collection(find(arr, regex));
Collection.avg = (arr, skipNaN = false) => avg(arr, skipNaN);
Collection.chunk = (arr, count) => new Collection(chunk(arr, count));
Collection.skipUntil = (arr, value) => new Collection(skipUntil(arr, value));
Collection.contains = (arr, search) => contains(arr, search);
Collection.get = (arr, path) => get(arr, path);
Collection.normalize = (arr, schema, transform = false) => normalize(arr, schema, transform);
Collection.pluck = (arr, path) => new Collection(pluck(arr, path));
Collection.unique = (arr) => new Collection(unique(arr));
Collection.fill = (length, value) => new Collection(fill(length, value));
//#endregion

//#region object methods 14
Collection.prototype.find = function (regex) {
  new Collection(find(this.collectionContent, regex));
};
Collection.prototype.avg = function (skipNaN = false) {
  return avg(this.collectionContent, skipNaN);
};
Collection.prototype.chunk = function (count) {
  return new Collection(chunk(this.collectionContent, count));
};
Collection.prototype.skipUntil = function (value) {
  return new Collection(skipUntil(this.collectionContent, value));
};
Collection.prototype.contains = function (search) {
  return contains(this.collectionContent, search);
};
Collection.prototype.get = function (path) {
  return get(this.collectionContent, path);
};
Collection.prototype.normalize = function (schema, transform = false) {
  return normalize(this.collectionContent, schema, transform);
};
Collection.prototype.pluck = function (path) {
  return new Collection(pluck(this.collectionContent, path));
};
Collection.prototype.unique = function () {
  return new Collection(unique(this.collectionContent));
};
Collection.prototype.fill = function (length, value) {
  return new Collection(fill(length, value));
};

//#endregion

//# region static method 15
Collection.sort = (arr, compareFunction) =>
  new Collection(sort([...arr], compareFunction));
Collection.sortDesc = (arr, compareFunction) =>
  new Collection(sort([...arr], compareFunction).reverse());
Collection.sortBy = (arr, column, compareFunction) =>
  new Collection(sortBy([...arr], column, compareFunction));
Collection.sortByDesc = (arr, column, compareFunction) =>
  new Collection(sortBy([...arr], column, compareFunction).reverse());
//#endregion

//#region object methods 15
Collection.prototype.sort = function (compareFunction) {
  sort(this.collectionContent, compareFunction);
  return this;
};
Collection.prototype.sortDesc = function (compareFunction) {
  sort(this.collectionContent, compareFunction).reverse();
  return this;
};
Collection.prototype.sortBy = function (column, compareFunction) {
  sortBy(this.collectionContent, column, compareFunction);
  return this;
};
Collection.prototype.sortByDesc = function (column, compareFunction) {
  sortBy(this.collectionContent, column, compareFunction).reverse();
  return this;
};
Collection.prototype.values = function () {
  return Object.values(this.collectionContent);
};
//#endregion

//# region static method 17
Collection.paginate = (arr, limit) =>
  new Pagination.make(paginate(Collection.make(arr), limit));
//#endregion

//#region object methods 17
Collection.prototype.paginate = function (limit) {
  return new Pagination(paginate(this, limit))
}

module.exports = {Collection};
