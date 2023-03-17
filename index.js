const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
var corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ name: "vi" });
});
app.get("/data", cors(corsOptions),(req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ name: "thanhvi", age: 23 }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
