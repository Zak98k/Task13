const Collection = require('../collection/collection.js');
const testData4 = require('../data/data.js').testData4;

console.log(Collection.make(testData4).pluck('name').values());
