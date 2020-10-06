const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date === null) throw Error;
  if((toString.call(date)) !== '[object Date]')throw Error;
  let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn','winter'];
  return season[date.getMonth()];
};
