const Sequelize = require("sequelize").Sequelize;

const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  "service",
  "root",
  "shivamsharma1",
  {
    dialect: "mysql",
    host: "localhost",
  }
);
module.exports = sequelize;