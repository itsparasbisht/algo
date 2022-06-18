function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([1, -5, 6, 10], 10));
console.log(linearSearch([1, -5, 6, 10], 1));
console.log(linearSearch([1, -5, 6, 10], 3));

// Big O = O(n)
