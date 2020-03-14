const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") return false;  // only strings!
  a = parseFloat(sampleActivity);
  if (isNaN(a)) return false; // not a number
  if (a <= 0 || a >= MODERN_ACTIVITY) return false; // invalid input
  return Math.ceil(Math.abs(Math.log(a / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)));
};
