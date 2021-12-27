module.exports = (arr, str) => {
  let prop = str
    .replace(/[\[\]\.']+/g, " ")
    .trim()
    .split(" ");

  let newArr=[...arr];
  for (let i = 0; i < prop.length; i++) {
    if (newArr[prop[i]] === undefined) return undefined;
    newArr = newArr[prop[i]];
  }
  return newArr;
}
