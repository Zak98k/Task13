const Collection = require('../../collection/collection.js')
module.exports = (collection, limit) =>
  new Collection(collection.collectionContent.toString().split(',')).chunk(limit)
