const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

// Import the services
const services = require("./services");

// Mount the services
app.use(services);

// Other routes and server logic

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
