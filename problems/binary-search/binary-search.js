// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) >> 1;

    if (arr[mid] < value) {
      start = mid + 1
    } else if (arr[mid] > value) {
      end = mid - 1
    } else {
      return mid
    }
  }

  return undefined;
}
