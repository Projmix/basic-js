const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.repeatTimes === undefined)  this.repeatTimes =  1;
  else this.repeatTimes =  options.repeatTimes;
  if(options.separator === undefined) this.separator = '+'; 
  else this.separator =  String(options.separator);
  if(options.additionRepeatTimes ==undefined) this.additionRepeatTimes = 1; 
  else this.additionRepeatTimes = options.additionRepeatTimes;
  if(options.additionSeparator === undefined) this.additionSeparator = '+'; 
  else  this.additionSeparator =  String(options.additionSeparator); 
  if (options.addition === undefined)  this.addition = "";
  else this.addition = String(options.addition);
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