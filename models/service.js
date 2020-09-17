const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const Service = sequelize.define(
  "service",
  {
    serviceID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isMajor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Service;
