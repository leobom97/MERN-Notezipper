import express from "express";
import { authUser, registerUser } from "../controllers/userControllers.js";

const router = express.Router();

//Endpoints referentes à requisições para a entidade "usuários"
router.route("/register").post(registerUser);
router.route("/login").post(authUser);

export default router;
