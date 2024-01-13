const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const cors = require("cors");
const connectDb = require("./config/db");

//Server Configs
const app = express();
app.use(express.json());
app.use(cors("Access-Control-Allow-Origin", "*"));
dotenv.config();
connectDb();

//Routes()
const routes = require("./routes/router");
app.use("/note", routes);

//Server Port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/notes", (req, res) => {
//   res.json(notes);
// });

app.listen(PORT, () => {
  try {
    console.log(
      `Server running on the following http address: http://localhost:${PORT}`
    );
  } catch (error) {
    throw new Error(`Http error: ${error}`);
  }
});
