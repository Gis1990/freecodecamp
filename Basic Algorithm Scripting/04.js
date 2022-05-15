function findLongestWordLength(str) {
  const splt_arr = str.split(" ");
  let maximum = splt_arr[0].length;
  let len = splt_arr.length;
  for (let i = 0; i < len; i++) {
    if (splt_arr[i].length > maximum) {
      maximum = splt_arr[i].length;
    }
  }
  return maximum;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
