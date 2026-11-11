// 6
function longSearch(string) {
  return string.split(" ").reduce((accum, word) => {
    return word.length > accum.length ? word : accum;
  }, "");
}

console.log(longSearch("огурец палиндром да"));