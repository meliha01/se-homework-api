const express = require('express');
const app = express();
const winston = require('winston');
const env = require('./configuration/env');

const currentWeatherRoute = require('./routes/currentWeatherRoute');
const forecastRoute = require('./routes/forecastRoute');
const historyRoute = require('./routes/historyRoute')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'C:/Users/Korisnik/Desktop/se-hw1/se-homework-api/app.log' })  ]
});

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use('/current', currentWeatherRoute);
app.use('/forecast', forecastRoute);
app.use('/history', historyRoute);

const PORT = env.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
