const express = require('express');
const app = express();

const currentWeatherRoutes = require('./routes/currentWeatherRoute');
const forecastRoutes = require('./routes/forecastRoute');
const historyRoutes = require('./routes/historyRoute');

app.use('/weather/current', currentWeatherRoutes);
app.use('/weather/forecast', forecastRoutes);
app.use('/weather/history', historyRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
