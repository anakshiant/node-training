const { sequelize } = require("../db/index");

function Init(app) {
  app.get("/user", async function (request, response) {
    const users = await sequelize.models.users.findAll({});
    response.status(200).send(users);
  });

  app.get("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ id });
    response.send({ user });
 });

  app.delete("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ id });
    const dest=await user.destroy()
    response.send({ dest });
  });

  app.post("/user", async function (request, response) {
    const { body } = request;
    const { first_name,last_name, email, password } = body;

    const createdUser = await sequelize.models.users.create({
      first_name,
      last_name,
      email,
      password,
    });
    response.status(201).send(createdUser);
  });

  app.put("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ id });

    const { body } = request;
    const { first_name, last_name, email, password } = body;
    
    user.first_name = first_name ? first_name : user.first_name;
    user.last_name= last_name ? last_name : user.last_name;
    user.email= email ? email : user.email;
    user.password = password ? password : user.password;
    
   
// // the name is still "Jane" in the database
    await user.save();

    response.status(200).send(user);
  })
}

module.exports = {
  Init,
};
