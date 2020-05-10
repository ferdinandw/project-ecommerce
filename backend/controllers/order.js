const orderSchema = require("../models/order");

module.exports = {
  createData: (req, res) => {
    orderSchema
      .create({
        name: req.body.name,
        orderDate: req.body.orderDate,
        total: req.body.total,
        status: req.body.status,
      })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    orderSchema
      .findAll()
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  deleteDataById: (req, res) => {
    Order.destroy({ where: { id: req.params.orderId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
