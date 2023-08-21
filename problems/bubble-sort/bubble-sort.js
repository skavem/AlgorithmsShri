// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr) {
  for (let iter = arr.length; iter > 0; iter--) {
    for (let pointer = 0; pointer <= iter; pointer++) {
      if (arr[pointer] > arr[pointer + 1]) {
        [arr[pointer], arr[pointer + 1]] = [arr[pointer + 1], arr[pointer]];
      }
    }
  }

  return arr;
}
