const weatherData = require('../data/weatherData');

exports.getCurrentWeather = async (location) => {
  const currentWeather = await weatherData.getCurrentWeather(location);
  return currentWeather;
};

exports.getWeatherForecast = async (location, duration) => {
  const forecast = await weatherData.getWeatherForecast(location, duration);
  return forecast;
};

exports.getWeatherHistory = async (location, startDate, endDate) => {
  const history = await weatherData.getWeatherHistory(location, startDate, endDate);
  return history;
};
