const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    newArray = newArray.concat(arr[i])
  }
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] === '^^') {
      count += 1
    }
  }
  return count
};
