function titleCase(str) {
  let result = str.split(" ");
  let len = result.length;
  for (let i = 0; i < len; i++) {
    result[i] =
      result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
  }
  return result.join(" ");
}

titleCase("I'm a little tea pot");
