let express = require("express");
let app = express();
console.log("Hello World");

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  app.use(express.static("public"));
});

module.exports = app;
