// 4
const batteryVowels = "yeoa";

function getStringReturn(yegtrfdoa) {
  return yegtrfdoa
    .toLowerCase()
    .split("")
    .filter((characters) => batteryVowels.includes(characters)).length;
}

console.log(getStringReturn("Yellow"));

