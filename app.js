const express = require('express');
const app = express();

const currentWeatherRoute = require('./routes/currentWeatherRoute');
const forecastRoute = require('./routes/forecastRoute');
const historyRoute = require('./routes/historyRoute');

app.use(express.json());
app.use('/current', currentWeatherRoute);
app.use('/forecast', forecastRoute);
app.use('/history', historyRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
