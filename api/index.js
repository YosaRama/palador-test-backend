//? Libs
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

//? Router
const organization = require("./router/organization");

//? Application
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/organization", organization);

//? Port Setting
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
