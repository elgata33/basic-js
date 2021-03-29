const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next' && i !== arr.length - 1) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i > 0) {
      newArr.push(newArr[newArr.length - 1]);
    } else if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      newArr.push(undefined);
      i++;
    } else if (arr[i] === '--discard-prev' && i > 0) {
      newArr.pop();
    } else if (
      arr[i] !== '--double-next' &&
      arr[i] !== '--double-prev' &&
      arr[i] !== '--discard-next' &&
      arr[i] !== '--discard-prev'
    ) {
      newArr.push(arr[i]);
    }
  }

  let result = newArr.filter(function (el) {
    return el !== undefined;
  });

  return result;
};
