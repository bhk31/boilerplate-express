let express = require("express");
let app = express();
console.log("Hello World");

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  express.static(__dirname + "/public/style.css");
});

module.exports = app;
