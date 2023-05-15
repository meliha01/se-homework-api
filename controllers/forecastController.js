const weatherService = require('../services/weatherServices');

exports.getWeatherForecast = async (req, res) => {
  try {
    const { location } = req.body;

    if (!location) {
      return res.status(400).json({ error: 'Location is required. Please provide a location.' });
    }

    const forecast = await weatherService.getWeatherForecast(location);
    if (forecast.length === 0) {
      return res.status(400).json({ error: 'Invalid location. Please enter a valid location.' });
    }

    res.json(forecast);
  } catch (error) {
    console.error('Error retrieving weather forecast:', error);
    res.status(500).json({ error: 'Failed to retrieve weather forecast' });
  }
};
