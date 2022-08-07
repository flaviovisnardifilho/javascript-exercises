const removeFromArray = function (array, ...params) {
  // let filteredArray = array;
  // for (let i of params) {
  //   filteredArray = filteredArray.filter(e => e !== i);
  // }
  // return filteredArray;

  return array.filter(val => !params.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
