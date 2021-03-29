const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  if (!arr) return;
  let teamName = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      teamName.push(arr[i].trim().charAt(0).toUpperCase());
    }
  }
  return teamName.sort().join('');
};
