const axios = require('axios');
const env = require('../configuration/env')

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