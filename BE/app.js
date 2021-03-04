const express = require("express");
const app = express();

const data = require("./data.json");

app.get("/lottery", (req, res, next) => {
  let items = data.items;
  if (req.query.sortOrder === "reward") {
    items = items.sort((a, b) => b.reward - a.reward);
  } else if (req.query.sortOrder === "end") {
    items = items.sort((a, b) => new Date(a.end) - new Date(b.end));
  }
  res.json(items);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
