const ItemSchema = require("../models/item");

module.exports = {
  //create data item.
  createData: (req, res) => {
    ItemSchema.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.file && req.file.path,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    ItemSchema.findAll()
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getDataById: (req, res) => {
    ItemSchema.findById({ where: { id: req.params.itemId } }).then((result) =>
      res.json(result).catch((err) => {
        throw err;
      })
    );
  },
  deleteDataById: (req, res) => {
    ItemSchema.destroy({ where: { id: req.params.itemId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  updateDataById: (req, res) => {
    ItemSchema.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.file && req.file.path,
      },
      { where: { id: req.params.menuId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
