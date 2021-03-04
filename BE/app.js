const express = require("express");
const app = express();

const data = require("./data.json");

app.get("/lottery", (req, res, next) => {
  res.json(data.items);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
