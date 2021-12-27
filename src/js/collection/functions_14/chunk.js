module.exports = (arr, count) => {
  if(count===0) return arr;
  let end = 0;
  let start = 0;
  let resArr = [];

  while (end !== (arr.length)) {
    start = end;
    end += count;
    if (end >= arr.length) {
      resArr.push(arr.slice(start));
      break;
    }
    resArr.push(arr.slice(start, end));
  }
  return resArr;
}
