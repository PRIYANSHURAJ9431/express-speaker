const express = require("express");
const path = require("path");
const app = express();

const routes = require("./api_routes/routes");
routes(app);
app.get("/", (req, res) => {
  res.send("hey");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
