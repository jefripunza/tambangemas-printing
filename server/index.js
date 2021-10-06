const server = require('./app');

const { config } = require("../config");

// standard Heroku App
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
    console.log("Server is Running on port %d in %s mode", port, config.environment);
});