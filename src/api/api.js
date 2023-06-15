// api/api.js
const express = require("express");
const app = express();

// API route definitions and logic
app.get("/backpropagation-data", (req, res) => {
  const backpropagationData = "Backpropagation details here";
  res.send(backpropagationData);
});

module.exports = app;
