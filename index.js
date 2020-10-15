const express = require("express");

const movies = ["sholay", "gangs of wasyepur"];

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/movie", function (request, response) {
  response.status(200).send({ movies });
});

app.post("/movie", function (request, response) {
  const { body } = request;
  movies.push(body.name);
  response.status(201).send({ name: body.name });
});

app.listen(PORT, function () {
  console.log(`Your app is running on PORT - ${PORT}`);
});
