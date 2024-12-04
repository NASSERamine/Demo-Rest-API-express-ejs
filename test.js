var fs = require("fs");

function synchrofunction() {
  var content = fs.readFileSync("data.txt");
  console.log(content.toString());
  console.log("execution terminé");
}

function asyncfunction(){
    var content=fs.readFile("data.txt",function(err,res){
        if(err){
            console.log(err)

        }
        else{
            console.log(res.toString())
        }

    })
    
    console.log("execution terminé")
    

}

asyncfunction()