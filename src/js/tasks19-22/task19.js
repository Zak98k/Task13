// Вывести в консоль по 4 значения из переданного массива с интервалом
// в 2 секунды.

function showItemsInInterval(arr, amount) {
  let start = 0;
  const intervalId = setInterval(() => {
    console.log(arr.slice(start, start + amount))
    start += amount;
    if (start > arr.length)
      clearInterval(intervalId)
  }, 2000);

}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, "Vasya", "|", "123", 9, 10, 11, 12, 13, 14, 15]

showItemsInInterval(arr, 4);

