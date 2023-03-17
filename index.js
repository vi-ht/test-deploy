const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ name: "vi" });
});
app.get("/data", (req, res) => {
  res.jsonp({ name: "thanhvi", age: 23 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
