const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userControllers");

//Endpoints
userRouter
  .route("/user")
  .post((req, res) => userController.registerUser(req, res));
userRouter
  .route("/users")
  .get((req, res) => userController.getAllUsers(req, res));

module.exports = userRouter;
