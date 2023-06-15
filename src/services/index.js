// services/index.js
const express = require("express");
const app = express();

// Import the APIs
const apiApp = require("../api/api.js");

// Mount the APIs
app.use("/api", apiApp);

module.exports = app;
