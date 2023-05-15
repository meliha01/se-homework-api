const express = require('express');
const router = express.Router();

const forecastController = require('../controllers/forecastController');

router.get('/', forecastController.getWeatherForecast);

module.exports = router;
