// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort

export function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) {
        break
      }

      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    }
  }

  return arr;
}
