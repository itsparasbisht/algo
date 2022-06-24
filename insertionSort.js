function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const arr = [8, 20, 4, -2, 4, -6];
insertionSort(arr);
console.log(arr);

// Big O = O(n^2)
