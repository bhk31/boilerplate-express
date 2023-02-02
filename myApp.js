let express = require("express");
require('dotenv').config();

let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res)=> {
  // process.env.MESSAGE_STYLE
  let message = "Hello json";
  let response;
  console.log(process.env.MESSAGE_STYLE);
  if(process.env.MESSAGE_STYLE === "uppercase") {
    console.log(1);
    response =  message.toUpperCase();  
  } else {
    console.log(2);
    response = message;
  }
  console.log(response);

  res.json({"message": response});
  // process.env.MESSAGE_STYLE
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
