const weatherService = require('../services/weatherServices');
const NodeCache = require('node-cache');

const cache = new NodeCache();

exports.getCurrentWeather = async (req, res) => {
  try {
    const { location } = req.body;

    if(!location) {
      return res.status(400).json({ error: 'Location is required. Please provide a location.' });
    }

    const cachedWeather = cache.get(location);
    if (cachedWeather) {
      console.log("Cached information");
      return res.json(cachedWeather);
    }

    const currentWeather = await weatherService.getCurrentWeather(location);
    if (currentWeather.length === 0) {
      return res.status(400).json({error: 'Invalid location. Please enter a valid location.' });
    }

    cache.set(location, currentWeather);

    res.json(currentWeather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve current weather' });
  }
};
