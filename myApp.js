let express = require("express");
require('dotenv').config();

let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res)=> {  
  let message = "Hello json";
  let response;
  console.log(process.env.MESSAGE_STYLE);
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response =  message.toUpperCase();  
  } else {
    response = message;
  }
  console.log(response);

  res.json({"message": response});
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
