module.exports = (field) =>
  (a, b) => a[field] > b[field] ? 1 : -1;
