const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = (require = require(__dirname + "/../config/config.json")[[env]]);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const order = sequelize.define("order", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    enum: ["confirmed", "packed", "out for delivery", "delivered"], //only values in this field are allowed to send.
  },
});
module.exports = order;
