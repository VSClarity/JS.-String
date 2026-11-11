// 5
function checkPalindrome(string) {
  return string.split("").reverse().join("") === string;
}

console.log(checkPalindrome("шалаш"));
