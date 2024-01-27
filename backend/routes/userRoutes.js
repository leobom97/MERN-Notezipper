import express from "express";
import { authUser, registerUser } from "../controllers/userControllers.js";
import multer from "multer";

const router = express.Router();
//Multer config
const DIR = "./uploads/";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/type" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Only .png, .jpg, .jpeg files formats are allowed!!!")
      );
    }
  },
});

//Endpoints referentes à requisições para a entidade "usuários"
router.route("/register", upload.single("pic")).post(registerUser);
router.route("/login").post(authUser);

export default router;
