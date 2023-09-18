const {Schema} = require("mongoose")

const characterSchema = new Schema({
    _id : String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref:"Planet"}, // REFERENCIA AL ID DEL PLANETA
    films: [{type:String, ref:"Film"}]  // ARRAY CON REFERENCIAS AL ID DELA PELICULA
})
module.exports = characterSchema;