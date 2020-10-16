const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password",
  database: "hermes",
});

const MasterKey = sequelize.define(
  "master_keys",
  {
    masterKey: {
      defaultValue: "master_key",
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { createdAt: false, updatedAt: false }
);

exports.init = async function () {
  try {
    await sequelize.authenticate();

    const data = await MasterKey.findAll({});

    console.log("db > init > data", data);
  } catch (error) {
    console.log("db > init > ", error);
  }
};
