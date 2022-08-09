const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("home");
});

// Method 1
let listener = require("./routes/listener");
listener(app);

// app.set('view engine','ejs');
// app.set("views",path.join(__dirname,"./views"));
// app.use(express.static(path.join(__dirname, "./static")));

// Method 2
let routes = require("./routes");

const userData = require("./data/users.json");

const FilterService = require("./services/FilterService");

const filterService = new FilterService(userData);

app.use("/", routes({ filterService }));

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
