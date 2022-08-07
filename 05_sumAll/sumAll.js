const sumAll = function (intA, intB) {
  // return Number('90');
  if (
    typeof intA != 'number' ||
    typeof intB != 'number' ||
    intA < 0 ||
    intB < 0
  )
    return 'ERROR';

  let sumOfNumbers = 0;
  for (let i = Math.min(intA, intB); i <= Math.max(intA, intB); i++) {
    sumOfNumbers += i;
  }
  return sumOfNumbers;
};
// Do not edit below this line
module.exports = sumAll;
