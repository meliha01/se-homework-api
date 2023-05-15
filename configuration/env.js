require("dotenv").config()
const values = process.env

module.exports = {
    PORT: values.PORT,
    API_KEY: values.API_KEY,
}