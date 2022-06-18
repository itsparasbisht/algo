function binarySearch(sortedArray, target) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === sortedArray[middleIndex]) {
      return middleIndex;
    }
    if (target < sortedArray[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-7, 0, 5, 17, 39, 44, 50, 80, 100], 100));
console.log(binarySearch([-7, 0, 5, 17, 39, 44, 50, 80, 100], 39));
console.log(binarySearch([-7, 0, 5, 17, 39, 44, 50, 80, 100], -7));
console.log(binarySearch([-7, 0, 5, 17, 39, 44, 50, 80, 100], 2));

// Big O = O(logn)
