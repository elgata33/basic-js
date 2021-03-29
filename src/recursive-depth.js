const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepths = 0;
    let depths = 0;
    for (let key in arr) {
      if (typeof arr[key] === 'object') {
        depths = this.calculateDepth(arr[key]);
      }
      if (depths > maxDepths) {
        maxDepths = depths;
      }
    }
    return maxDepths + 1;
  }
};
