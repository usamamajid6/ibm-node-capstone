const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000, () => {
  console.log(`App running on port 9000`)
})