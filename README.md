# API-homework
This is homework for Software Engineering course.

# Weather API
This is a simple weather application that retrieves current weather and weather forecast using the OpenWeatherMap API. It provides endpoints to get weather information based on location.

## Getting started

### Prerequisites
- Node.js 
- API key for the OpenWeatherMap API
- Express
- Nodemon
- Winston
- Node cache

### Installation
1. Clone the repository: `git clone https://github.com/meliha01/se-homework-api.git`
2. Install the dependencies: `cd se-homework-api`
`npm install`

### Configuration
1. Open the `.env` file in the project root.
2. Set the value of `PORT` to your local host port.
3. Set the value of `API_KEY` to your OpenWeatherMap API key.

### Starting the Server
npm run dev

## Usage

The API provides the following endpoints:

- `/current`: Retrieves the current weather for a specified location.
- `/forecast`: Retrieves the weather forecast for a specified location.
- `/history`: Retrieves the weather history for a specified location within a given date range.

## Postman collection
https://api.postman.com/collections/26981245-bd7064c8-9dbe-4d17-8cad-802953293110?access_key=PMAT-01H0GHB99B1GJV3ZHG7FNMGHF2
## Logging
The API logs all incoming requests to the console and a log file located at app.log. The log includes the timestamp, HTTP method, and URL of each request. This logging functionality is implemented using the winston logging library

## Cache
The API utilizes caching to improve performance and reduce the number of requests to the weather service. Caching is implemented using the node-cache library, which stores fetched weather data in memory. The cache is checked before making a request to the weather service, and if the data is found in the cache, it is returned directly. Otherwise, the data is fetched from the weather service, stored in the cache, and then returned. The cache expiration is set to a default value or can be configured as needed.