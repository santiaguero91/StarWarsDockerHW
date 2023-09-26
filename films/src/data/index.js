const axios= require("axios")
module.exports ={
    list: async () =>{
        response = await axios.get("http://database:3005/Film")
        return response.data
    }
};