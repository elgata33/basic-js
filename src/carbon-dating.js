const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity)) {
    return false;
  }
  if (+sampleActivity > '15' || +sampleActivity <= 0) {
    return false;
  }

  result =
    (Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD) /
    Math.log(2);
  return Math.ceil(result);
};
