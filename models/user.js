const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const Bcrypt = require("bcrypt");
const saltRounds = 6;
const config = (require = require(__dirname + "/../config/config.json")[[env]]);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const User = sequelize.define(
  "user",
  {
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
  },
  { freezeTableName: true, timestamps: false }
);
User.pre("save", function (next) {
  this.password = Bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = User;
