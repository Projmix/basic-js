const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr, depth = 1, result = []) {
    result.push(depth);
    arr.forEach(element => {
        if (typeof(element) == 'object') this.calculateDepth(element, depth + 1, result)
      });
    return Math.max(...result);
}
}