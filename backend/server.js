const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/note/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  res.send(note);
});

app.listen(PORT, () => {
  try {
    console.log(
      `Server running on the following http address: http://localhost:${PORT}`
    );
  } catch (error) {
    throw new Error(`Http error: ${error}`);
  }
});
