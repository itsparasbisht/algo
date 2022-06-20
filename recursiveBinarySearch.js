function recursiveBinarySearch(
  sortedArray,
  target,
  lIndex = 0,
  rIndex = sortedArray.length - 1
) {
  console.log("l = ", lIndex);
  console.log("r = ", rIndex);

  let leftIndex = lIndex;
  let rightIndex = rIndex;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  console.log(sortedArray[middleIndex] === target);
  // console.log(target);
  if (sortedArray[middleIndex] === target) {
    return middleIndex;
  }
  if (target < sortedArray[middleIndex]) {
    rightIndex = middleIndex - 1;
    recursiveBinarySearch(sortedArray, target, leftIndex, rightIndex);
  }
  if (target > sortedArray[middleIndex]) {
    leftIndex = middleIndex + 1;
    recursiveBinarySearch(sortedArray, target, leftIndex, rightIndex);
  } else {
    return -1;
  }
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2));
