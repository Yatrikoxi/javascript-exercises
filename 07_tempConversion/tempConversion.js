const convertToCelsius = function(x) {
let celsius = 0;
const a = x - 32;
let b = (a * 5) / 9;
celsius = Math.round(b * 10) / 10;
return celsius;
};

const convertToFahrenheit = function(y) {
let fahrenheit = 0;
const c = (y * 1.8) + 32;
fahrenheit = Math.round(c * 10) / 10;
return fahrenheit

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
