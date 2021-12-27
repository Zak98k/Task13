const {Collection} = require('../../collection/collection')
module.exports = function page(collection,  page)  {
  if(page<1||page>collection.length) {
    throw  `Invalid page = ${page}.`
    }
  return new Collection(collection.collectionContent[page]);
}
