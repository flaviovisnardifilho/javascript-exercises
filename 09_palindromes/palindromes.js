const palindromes = function (string) {
  return (
    string.replace(/[^\w]/gi, '').split('').reverse().join('').toLowerCase() ===
    string.replace(/[^\w]/gi, '').toLowerCase()
  );
};

// const palindromes = function(string) {
//   processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//   return (
//     processedString
//       .split("")
//       .reverse()
//       .join("") == processedString
//   );
// };

// Do not edit below this line
module.exports = palindromes;
