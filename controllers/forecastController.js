const weatherService = require('../services/weatherServices');

exports.getWeatherForecast = async (req, res) => {
  try {
    const { location } = req.body;
    const forecast = await weatherService.getWeatherForecast(location);
    res.json(forecast);
  } catch (error) {
    console.error('Error retrieving weather forecast:', error);
    res.status(500).json({ error: 'Failed to retrieve weather forecast' });
  }
};
