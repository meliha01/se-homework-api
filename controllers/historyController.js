const weatherService = require('../services/weatherServices');

exports.getWeatherHistory = async (req, res) => {
  try {
    const { location, startDate, endDate } = req.query;
    const history = await weatherService.getWeatherHistory(location, startDate, endDate);
    res.json(history);
  } catch (error) {
    console.error('Error retrieving weather history:', error);
    res.status(500).json({ error: 'Failed to retrieve weather history' });
  }
};
