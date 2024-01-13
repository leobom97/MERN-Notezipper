const { User: UserModel, User } = require("../models/usersModel");

const userController = {
  registerUser: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture,
      };
      const response = await UserModel.create(user);
      res.status(201).json({ response, message: "User succefully created" });
    } catch (error) {
      throw new Error(`Post request error: ${error}`);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const user = await UserModel.find();
      res.status(200).json({ user: user });
    } catch (error) {
      throw new Error(`GET request error: ${error}`);
    }
  },
  getUser: async (req, res) => {},
  updateUser: async (req, res) => {},
  deleteUser: async (req, res) => {},
};

module.exports = userController;
