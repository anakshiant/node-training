const { request } = require("express");
const express = require("express");
const movieController = require("./controller/movie");
const db = require("./db/index");

const PORT = 3100;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

movieController.Init(app);

db.init().then(console.log).catch(console.log);

app.listen(PORT, function () {
  console.log(`Your app is running on PORT - ${PORT}`);
});
