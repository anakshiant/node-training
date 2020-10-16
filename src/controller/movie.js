let movies = ["sholay", "gangs of wasyepur"];

function Init(app) {
  app.get("/movie", async function (request, response) {
    const user = request.user;
    response.status(200).send({ movies });
  });

  app.get("/movie/:id", async function (request, response) {
    const { id } = request.params;
    const movie = movies[id];
    response.send({ movie });
  });

  app.delete("/movie/:id", async function (request, response) {
    const { id } = request.params;
    movies = movies.filter((_, index) => index != id);
    response.send({ name: movies });
  });

  app.post("/movie",async function (request, response) {
    const { body } = request;
    movies.push(body.name);
    response.status(201).send({ name: body.name });
  });
}

module.exports = {
  Init,
};
