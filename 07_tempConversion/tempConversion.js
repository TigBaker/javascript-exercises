const convertToCelsius = function(tempF) {
  let tempCelsius = Math.round((tempF - 32) * (5 / 9) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempC) {
  let tempFahrenheit = Math.round((tempC * (9 / 5) + 32) * 10) / 10;

  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
