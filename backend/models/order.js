const sequelize = require("sequelize");

const order = sequelize.define("order", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  orderDate: {
    type: sequelize.DATE,
    allowNull: false,
  },
  total: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: sequelize.STRING,
    allowNull: false,
    enum: ["confirmed", "packed", "out for delivery", "delivered"], //only values in this field are allowed to send.
  },
});
module.exports = order;
