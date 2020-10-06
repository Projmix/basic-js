const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  this.repeatTimes =  options.repeatTimes;
  this.separator =  String(options.separator);
  this.addition = String(options.addition);
  this.additionRepeatTimes = options.additionRepeatTimes;
  this.additionSeparator =  String(options.additionSeparator);

  if(options.repeatTimes === undefined)  this.repeatTimes =  1;
  if(options.separator === undefined) this.separator = '+'; 
  if(options.additionRepeatTimes ==undefined) this.additionRepeatTimes = 1; 
  if(options.additionSeparator === undefined) this.additionSeparator = '+';  
  if (options.addition === undefined)  this.addition = "";

  let string='';

  for (let i = 0; i < this.repeatTimes; i++) {
    string += str;
    for (let j = 0; j < this.additionRepeatTimes; j++) {
      string += this.addition;
      j < (this.additionRepeatTimes-1) ? string += this.additionSeparator : 0;
    }
    i < (this.repeatTimes - 1) ? string += this.separator : 0;
  }

  return string;
};