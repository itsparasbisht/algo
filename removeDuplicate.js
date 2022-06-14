const arr = [1, 1, 4, 5, 3, 3, 7, 5, 9, 12, 13, 13, 5];
const newArr = [];

arr.forEach((item) => {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item);
  }
});

console.log(newArr);
