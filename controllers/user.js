const User = require("../models/user");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "sdhskdnk";

module.exports = {
  createData: (req, res) => {
    User.create({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getData: (req, res) => {
    User.findAll()
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getDataById: (req, res) => {
    User.findOne({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  deleteDataById: (req, res) => {
    User.destroy({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  updateDataById: (req, res) => {
    User.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
      },
      { where: { id: req.params.userId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  authenticated: function (req, res, next) {
    Users.findOne({
      email: req.body.email,
    })
      .then((responese, err) => {
        if (err) next(err);
        else {
          if (
            responese != null &&
            Bcrypt.compareSync(req.body.password, responese.password)
          ) {
            jwt.sign(
              {
                id: responese._id,
              },
              privateKey,
              { expiresIn: 60 * 60 },
              (err, token) => {
                res.json(token);
              }
            );
          } else {
            res.json({ status: err });
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};
