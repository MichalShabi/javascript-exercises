const convertToCelsius = function(temp) {
  temp = (temp-32)*(5/9);
  temp = temp.toFixed(1);
  return Number(temp);
};

const convertToFahrenheit = function(temp) {
  temp = (temp * (9/5)+32);
  temp = temp.toFixed(1);
  return Number(temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
