const server = require("./src/server")


const {Character, Film, Planet} = require("./src/database/index")

 
/* 
Planet.list()
.then((res)=>console.log(res[0]));  
*/

/* Planet.get(1)
.then((res)=>console.log(res));   */

/* Character.insert({
    _id:"200",
    name:"Santi Aguero",
    height:"180",
    mass: "65",
    hair_color: "black",
    skin_color: "fair",
    eye_color: "blue"
}) */




server.listen(3005,()=>{
    console.log("Database service on PORT 3005")
})

