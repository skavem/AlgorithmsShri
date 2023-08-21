// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr) {
  let iter = arr.length;

  while (iter > 0) {
    let pointer = 0;

    for (let pointer = 0; pointer <= iter; pointer++) {
      if (arr[pointer] > arr[pointer + 1]) {
        [arr[pointer], arr[pointer + 1]] = [arr[pointer + 1], arr[pointer]];
      }
    }

    iter--;
  }

  return arr;
}
