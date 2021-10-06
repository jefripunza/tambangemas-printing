const { config } = require("../config")

// ================================================================================================================
const express = require("express");
const http = require("http");

global.express = express;
const app = express();
global.app = app;
const server = http.createServer(app);
global.server = server;

// ================================================================================================================
// middleware
require("./middlewares");

// ================================================================================================================
// Routes
require("./routes");

module.exports = server;