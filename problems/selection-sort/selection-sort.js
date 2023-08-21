// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

export function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curMinInd = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[curMinInd]) {
        curMinInd = j;
      }
    }

    [arr[i], arr[curMinInd]] = [arr[curMinInd], arr[i]]
  }

  return arr;
}
