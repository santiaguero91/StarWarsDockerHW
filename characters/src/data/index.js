const axios= require("axios")

module.exports ={
    list: async () =>{
        response = await axios.get("http://database:3005/Character")
        return response.data;
    },

    create: async ()=>{
        throw Error("Hubo un error en la BDD al momento de crear el personaje")
    }
};