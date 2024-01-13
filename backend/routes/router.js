//Router Container
const express = require("express");
const router = express.Router();

//Users Routes
const userRouter = require("./userRoutes");
router.use("/", userRouter);

module.exports = router;
