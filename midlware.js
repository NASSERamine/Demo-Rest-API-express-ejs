const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let middlware1 = function (req, res, next) {
  console.log("midlware 1");
  next()
};

let middlware2 = function (req, res, next) {
    console.log("midlware 2");
  };

  app.use(middlware2)
  app.use(middlware1)

  app.get("/",(req,res)=>{
    console.log("reciver request "+req)
    console.log("tay a sa7bi")
  })
  

  app.listen(8081,()=>{
    console.log("app is listening on port 8081")
})
