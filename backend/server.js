const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
const CCLDB = require("./models/CCLDB");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/ccldb", async (req, res) => {
  try {
    console.log(req.body);
    const student = await CCLDB.find();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});