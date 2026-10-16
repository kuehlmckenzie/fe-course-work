// 1.checks to see if it is a string
function isString(input) {
  return typeof input === "string" || input instanceof String;
}
console.log(isString("abc"));
console.log(isString(190));
// 2.checks to see if this is a blank string
function isBlankString(str) {
  if (typeof str !== "string") {
    return true;
  }
  return str.trim().length === 0;
}
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));
// 3.capitalizes first letter
function capitalizeFirst(str) {
  if (!str || typeof str !== "string") return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst("abcdef"));

// 4.abbreviates last name
function abbr(fullName) {
  const parts = fullName.trim().split(/\s+/);

  const firstName = parts[0].toUpperCase();
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${firstName}.${lastInitial}.`;
}

console.log(abbr("Ryan Curtis"));
// 5.creates a sentence cut off at a chosen point followed by ellispes
function truncate(str, maxLength, countEllipsis = false) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0) + "...";
}
console.log(truncate("I am a long sentence", 5));
// 6. rewrites the string starting at the g

const str = "The practitioners grappled on the road side!";
const result = str.slice(str.indexOf("g"));
console.log(result);
