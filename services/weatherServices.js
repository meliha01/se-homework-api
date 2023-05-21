const axios = require('axios');
const env = require('../configuration/env');

const API_KEY = env.API_KEY;

exports.getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    const { main, weather, name } = response.data;
    const { temp } = main;
    const { description } = weather[0];

    return {
      temperature: temp,
      weather: description,
      city: name
    };
  } catch (error) {
    console.error('Error retrieving data: ', error);
  }
};

exports.getWeatherForecast = async (location) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`);
    const { list } = response.data;
    
    const forecast = list.map(item => {
      const { dt_txt, main, weather } = item;
      const { temp } = main;
      const { description } = weather[0];

      return {
        date: dt_txt,
        temperature: temp,
        weather: description
      };
    });

    return forecast;
  } catch (error) {
    console.error('Error retrieving data: ', error);
  }
};

function UnixTime(date) {
  date = new Date(date);
  const unixTime = Date.parse(date) / 1000;
  return unixTime;
}

function unixTimeToDate(unixTime) {
  const milliseconds = unixTime * 1000; 
  const date = new Date(milliseconds);
  const dateString = date.toLocaleDateString();

  return dateString;
}

exports.getWeatherHistory = async (location, startDate, endDate) => {
  try {
    const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`)
    const { lat, lon } = geoResponse.data[0];

    const weatherResponse = await axios.get(`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&appid=${API_KEY}&start=${UnixTime(startDate)}&end=${UnixTime(endDate)}&units=metric`);
    const { list } = weatherResponse.data;
    
    const history = list.map(item => {
      const { dt, main, weather } = item;
      const { temp } = main;
      const { description } = weather[0];

      return {
        date: unixTimeToDate(dt),
        temperature: temp,
        weather: description
      };
  });
  return history;
}
   catch (error) {
    console.error('Error retrieving data: ', error);
  }
};
