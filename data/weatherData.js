exports.getCurrentWeather = async (location) => {
    return {
      location: "Sarajevo",
      temperature: 25,
      humidity: 80,
    };
  };

  exports.getWeatherForecast = async (location, duration) => {

    return {
      location: "Sarajevo",
      forecast: [
        { date: '2023-05-15', temperature: 26, condition: 'Sunny' },
        { date: '2023-05-16', temperature: 28, condition: 'Partly' },
      ],
    };
  };

  exports.getWeatherHistory = async (location, startDate, endDate) => {
    return {
      location: "Sarajevo",
      history: [
        { date: '2023-05-10', temperature: 22, condition: 'Rainy' },
        { date: '2023-05-11', temperature: 24, condition: 'Cloudy' },
      ],
    };
  };
  