require("dotenv").config();
let bodyParser = require("body-parser");
let express = require("express");

let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  let response;

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = message.toUpperCase();
  } else {
    response = message;
  }

  res.json({ message: response });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.use("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.post("/name", (req, res) => {
  console.log(req);
  res.json({ name: `${req.body.first} ${req.body.last}` });
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
