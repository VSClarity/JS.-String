// 3
const stringABCDE = "abcde abcde abcde abcde";

const resultString = stringABCDE
  .split(" ")
  .map((addSymbol) => "!" + addSymbol.slice(1))
  .join(" ");

console.log(resultString);

