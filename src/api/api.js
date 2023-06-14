const express = require('express');
const app = express();
const port = 3001; // Choose the desired port number

app.get('/backpropagation-data', (req, res) => {
  // Retrieve the backpropagation data and send it as a response
  const backpropagationData = 'Backpropagation details here';
  res.send(backpropagationData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});