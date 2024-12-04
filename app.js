const express = require("express");
const app = express();


const bodyParser = require("body-parser");

// ejs
app.set('view engine','ejs');


//midlwares
app.use(express.urlencoded({ extended: true })); // Pour les données encodées par le formulaire
app.use(bodyParser.json())

const productRouter=require("./routes/productRoutes");



app.use("/api/products",productRouter) 

app.get("/",(req,res)=>{
  
   res.render("index.ejs",{nom: 'Ninja'})
})


app.listen(8081, () => {
  console.log("app is running on port 8081");
});
