const weatherService = require('../services/weatherServices');

exports.getCurrentWeather = async (req, res) => {
  try {
    const { location } = req.body;

    if(!location) {
      return res.status(400).json({ error: 'Location is required. Please provide a location.' });
    }

    const currentWeather = await weatherService.getCurrentWeather(location);
    if (currentWeather.length === 0) {
      return res.status(400).json({error: 'Invalid location. Please enter a valid location.' });
    }
    res.json(currentWeather);
  } catch (error) {
    console.error('Error retrieving current weather:', error);
    res.status(500).json({ error: 'Failed to retrieve current weather' });
  }
};
