const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  matrix.forEach(element => {
    for (let j = 0; j < element.length; j++) {
      if (element[j] == '^^') sum++;
    }
  });
  return sum;
};
