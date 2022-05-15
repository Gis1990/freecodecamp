function getIndexToIns(arr, num) {
  let len = arr.length;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (sortedArr[i] >= num) return i;
  }
  return len;
}

console.log(getIndexToIns([2, 20, 10], 19));
