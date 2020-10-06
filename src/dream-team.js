const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let rez = members.map(function(el) {
    if(typeof(el) === 'string')return el.replace(/\s/g, '').slice(0,1).toUpperCase();
    else return '';
  });
  return rez.sort().join('');

};
