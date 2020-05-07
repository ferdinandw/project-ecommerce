var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const privateKey = "sdhskdnk";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var itemRouter = require("./routes/Item");
const orderRouter = require("./routes/order");
var userRouter = require("./routes/User");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/item", validateUser, itemRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
    if (err) {
      res.json(err);
    } else {
      req.body.userId = decoded.id;
    }
  });
}
module.exports = app;
