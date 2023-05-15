# se-homework-api
Homework for Software Engineering course. Making weather api.

# Weather App

This is a simple weather application that retrieves current weather and weather forecast using the OpenWeatherMap API. It provides endpoints to get weather information based on location.

## Getting Started

### Prerequisites

- Node.js 
- API key for the OpenWeatherMap API
- Express
- Nodemon
- Winston

### Installation

1. Clone the repository:

   git clone https://github.com/meliha01/se-homework-api.git

2. Install dependencies

    cd weather-app
    npm install

3. Set up environment variables:

    Create a .env file in the root directory of the project.
    Add your OpenWeatherMap API key to the .env file:
    API_KEY=your_api_key_here
    PORT=port_where_you_run

# Usage

1. Start the server
    
    npm run dev

2. Make API requests to the available endpoints:

       * Get Current Weather:
        GET /current/:location
        Get the current weather information for the specified location.

       * Get Weather Forecast:
        GET /forecast/:location
        Get the weather forecast for the next 5 days for each 3 hours for the specified location.


# Test the API endpoints using tools like Postman
    Postman collection: https://api.postman.com/collections/26981245-bd7064c8-9dbe-4d17-8cad-802953293110?access_key=PMAT-01H0GHB99B1GJV3ZHG7FNMGHF2

# Logging
    This application uses the Winston library for logging. Logs are written to the app.log file.

# Error Handling
    The application handles errors and returns appropriate HTTP status codes and error messages. When an error occurs, it is logged and an error response is sent to the client.

# Contributing
    Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open a pull request.