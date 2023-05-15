const axios = require('axios');
const env = require('../configuration/env')

const API_KEY = env.API_KEY; // Replace with your weatherstack API key

exports.getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving current weather:', error);
    throw new Error('Failed to retrieve current weather');
  }
};

exports.getWeatherForecast = async (location, duration) => {
  try {
    const response = await axios.get(`http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${location}&forecast_days=${duration}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving weather forecast:', error);
    throw new Error('Failed to retrieve weather forecast');
  }
};

exports.getWeatherHistory = async (location, startDate, endDate) => {
  try {
    const response = await axios.get(`http://api.weatherstack.com/historical?access_key=${API_KEY}&query=${location}&historical_date_start=${startDate}&historical_date_end=${endDate}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving weather history:', error);
    throw new Error('Failed to retrieve weather history');
  }
};
