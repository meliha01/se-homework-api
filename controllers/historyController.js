const weatherService = require('../services/weatherServices');
const NodeCache = require('node-cache');

const cache = new NodeCache();

exports.historyController = async (req, res) => {
  try {
    const { location, startDate, endDate } = req.body;

    if (!location) {
      return res.status(400).json({ error: 'Location is required. Please provide a location.' });
    }

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Start and end dates are required.' });
    }

    const cacheKey = `${location}_${startDate}_${endDate}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log('Cached history data');
      return res.json(cachedData);
    }

    const parsedWeatherData = await weatherService.getWeatherHistory(location, startDate, endDate);

    cache.set(cacheKey, parsedWeatherData);

    res.send({
      location,
      parsedWeatherData,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error, can't retrieve data." });
  }
};
