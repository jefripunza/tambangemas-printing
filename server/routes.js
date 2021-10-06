const { config } = require("../config");

// ===============================================

const express = global.express;
const app = global.app;

// ===============================================

const Controller = require('./controllers');

app.get("/api/:request", Controller.api_get);
app.post("/api/:request", Controller.api_post);

app.use(express.static(config.path_public));
app.get("*", Controller.index); // next to React JS
