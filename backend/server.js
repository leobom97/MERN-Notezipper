import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import databaseConnection from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import bodyParser from "body-parser";

//Server Configs
const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors("Access-Control-Allow-Origin", "*"));
dotenv.config();
databaseConnection();

//Routes()
app.use("/users", userRouter);

//Server Port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

//Webserver
app.listen(PORT, () => {
  try {
    console.log(
      `Server running on the following http address: http://localhost:${PORT}`
    );
  } catch (error) {
    throw new Error(`Http error: ${error}`);
  }
});
