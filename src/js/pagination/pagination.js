const {Collection}=require('../collection/collection.js')
const page = require('./functions_16/page')
const paginate = require('./functions_16/paginate')
const count = require('./functions_16/count')
function Pagination(collection) {
  this._current = 1;
  this.paginationContent = collection;
  if (!new.target) {
    return new Pagination(collection);
  }
  Object.defineProperty(this, 'current', {
    get: () => this._current,
    set: (val) => {
      if (val < 1 || val >= this.paginationContent.length) {
        throw alert('value is not correct');
      }
      this._current = val;
    }
  })
}

// # region static method 17
Pagination.make = (collection, limit) => new Pagination(collection.chunk(limit));
//#endregion
//#region object methods
Pagination.prototype.page = function (pageNumber) {
  return page(this.paginationContent, pageNumber-1)
}
Pagination.prototype.paginate = function (pageNumber) {
  return new Pagination(paginate(this.paginationContent, pageNumber))
}
Pagination.prototype.count = function () {
  return count(this.paginationContent)
}
//#endregion

module.exports = {Pagination};

