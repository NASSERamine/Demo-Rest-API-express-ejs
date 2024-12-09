const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("ya hala bl 8ali");
});

app.post("/login", urlencodedParser, function (req, res) {
  res.send("  hello   " + req.body.username);
});

app.listen(8081, () => {
  console.log("app is listening on port 8081");
});
