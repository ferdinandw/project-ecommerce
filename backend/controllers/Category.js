const Models = require("../models");
const Category = Models.Category;

module.exports = {
  // create category.
  create: (req, res) => {
    Category.create({
      name: req.body.name,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // show category id.
  getAllData: (req, res) => {
    Category.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
