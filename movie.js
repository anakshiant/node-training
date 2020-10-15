exports.init = function (app) {
  app.get("/movie", function (request, response) {
    response.status(200).send({ movies });
  });

  app.post("/movie", function (request, response) {
    const { body } = request;
    movies.push(body.name);
    response.status(201).send({ name: body.name });
  });
};
