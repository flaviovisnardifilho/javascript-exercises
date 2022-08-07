const reverseString = function (words) {
  // let reversedWords = [];

  // for (let i = words.length - 1; i >= 0; i--) {
  //   reversedWords.push(words.charAt(i));
  // }

  // return reversedWords.join('');

  return words.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
