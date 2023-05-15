const weatherService = require('../services/weatherServices');

exports.getCurrentWeather = async (req, res) => {
  try {
    const { location } = req.query;
    const currentWeather = await weatherService.getCurrentWeather(location);
    res.json(currentWeather);
  } catch (error) {
    console.error('Error retrieving current weather:', error);
    res.status(500).json({ error: 'Failed to retrieve current weather' });
  }
};
