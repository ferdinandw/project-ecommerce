const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = (require = require(__dirname + "/../config/config.json")[[env]]);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = User;
