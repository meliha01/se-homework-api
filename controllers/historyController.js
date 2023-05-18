const weatherService = require('../services/weatherServices');

const historyController = async (req, res) => {
  try {
    const location = req.body.location; 
    const startDate = req.body.startDate; 
    const endDate = req.body.endDate; 
    if (!location) {
      return res.status(400).json({
        error: "Location is required. Please provide a location.",
      });
    }
    if (!startDate || !endDate) {
      return res.status(400).json({
        error: "Start and end dates are required.",
      });
    }

    const parsedWeatherData = await weatherService.getWeatherHistory(location, startDate, endDate);

    res.send({
      location,
      parsedWeatherData,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error, can't retrieve data." });
  }
};

module.exports = {
  historyController
};