const weatherService = require('../services/weatherServices');
const NodeCache = require('node-cache');
const { getCurrentWeather } = require('./currentWeatherController');

const cache = new NodeCache();

exports.getWeatherForecast = async (req, res) => {
  try {
    const { location } = req.body;

    if (!location) {
      return res.status(400).json({ error: 'Location is required. Please provide a location.' });
    }

    const cachedWeather = cache.get(location);
    if (cachedWeather) {
      console.log("Cached information");
      return res.json(cachedWeather);
    }

    const forecast = await weatherService.getWeatherForecast(location);
    if (forecast.length === 0) {
      return res.status(400).json({ error: 'Invalid location. Please enter a valid location.' });
    }

    cache.set(location, forecast);

    res.json(forecast);
  } catch (error) {
    console.error('Error retrieving weather forecast:', error);
    res.status(500).json({ error: 'Failed to retrieve weather forecast' });
  }
};
