const repeatString = function (word, times) {
  if (Number(times) < 0) return 'ERROR';

  let repeatedString = '';

  for (let i = 0; i < times; i++) {
    repeatedString += word;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
