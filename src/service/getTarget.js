export const binarySearch = (arr, target, setBinaryArr) => {
  let left = 0;
  let right = arr.length - 1;
  let center = 0;

  setInterval(() => {
    while (left <= right) {
      center = Math.floor(left + (right - left) / 2);
      setBinaryArr(arr.slice(left, right));
      if (arr[center] == target) return center;
      else if (arr[center] > target) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }
  }, 2000);
  return -1;
};
