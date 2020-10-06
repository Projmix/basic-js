const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity !== toString(sampleActivity) ||  isNaN(sampleActivity) || Number(sampleActivity)<=0 || Number(sampleActivity) > 15) 
  return false
  let N0 = MODERN_ACTIVITY;
  let N = Number(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD
  let time = Math.log(N0 / N) / k;
  return Math.ceil(time);
};
