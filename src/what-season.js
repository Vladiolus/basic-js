module.exports = function getSeason(date) {
  if (typeof date == "undefined") return "Unable to determine the time of year!";
  if (date.hasOwnProperty("getMonth")) throw new Error();
  let month = date.getMonth();
  if(month == 0 || month == 1 || month == 11) return "winter";
  if(2 <= month && month <= 4) return "spring";
  if(5 <= month && month <= 7) return "summer";
  if(8 <= month && month <= 10) return "autumn";
  return false;
};