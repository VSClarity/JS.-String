// 1
const stringsHref = [
  "http://example.com",
  "https://openai.com",
  "ftp://website.com",
  "http://google.com",
  "https://stackoverflow.com",
  "http://github.com",
  "http://youtube.com",
  "https://wikipedia.org",
  "ftp://server.net",
  "http://facebook.com",
  "https://amazon.com",
  "http://twitter.com",
  "https://linkedin.com",
  "ftp://host.com",
  "http://reddit.com",
  "https://medium.com",
];

const httpLinks = stringsHref.filter((link) => link.startsWith("http://"));

console.log(httpLinks);

// 2
const fileNames = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "contact.html",
  "home.html",
  "blog-post-1.html",
  "blog-post-2.html",
  "services.html",
  "portfolio.html",
  "projects.html",
  "gallery.html",
  "faq.html",
  "terms.html",
  "privacy-policy.html",
];

const htmlLinks = fileNames.filter((link) => link.endsWith(".html"));

console.log(htmlLinks);

// 3
const stringABCDE = "abcde abcde abcde abcde";

const resultString = stringABCDE
  .split(" ")
  .map((addSymbol) => "!" + addSymbol.slice(1))
  .join(" ");

console.log(resultString);

// 4
const batteryVowels = "yeoa";

function getStringReturn(yegtrfdoa) {
  return yegtrfdoa
    .toLowerCase()
    .split("")
    .filter((characters) => batteryVowels.includes(characters)).length;
}

console.log(getStringReturn("Yellow"));

// 5
function checkPalindrome(string) {
  return string.split("").reverse().join("") === string;
}

console.log(checkPalindrome("шалаш"));

// 6
function longSearch(string) {
  return string.split(" ").reduce((accum, word) => {
    return word.length > accum.length ? word : accum;
  }, "");
}

console.log(longSearch("огурец палиндром да"));