module.exports = function repeater(str, options) {
  if (str != null) {
    str = str.toString();    
  } else {
    str = "null";
  }
  
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  
  if (!options.repeatTimes || typeof options.repeatTimes != "number") {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  }
  
  if (!options.separator) {
    separator = "+";
  } else {
    separator = options.separator;
  }
  
  if (typeof options.addition != "undefined") {
    if (options.addition != null) {
      addition = options.addition.toString();
    } else addition = "null";
  } else {
    addition = "";
  }
  
  if (!options.additionRepeatTimes || typeof options.additionRepeatTimes != "number") {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  
  if (!options.additionSeparator) {
    additionSeparator = "|";
  } else {
    additionSeparator = options.additionSeparator;
  }
  
  let result = "";
  
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      result += additionSeparator;
    }
    if (additionRepeatTimes > 0) {
      result = result.slice(0, -additionSeparator.length);
    }
    result += separator;
  }
  if (repeatTimes > 0) {
    result = result.slice(0, -separator.length);
  }
  
  return result;
};

