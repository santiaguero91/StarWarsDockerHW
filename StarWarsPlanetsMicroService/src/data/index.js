const axios= require("axios")

module.exports ={
    list: async () =>{
        response = await axios.get("http://starwarsdb:3005/Planet")
        return response.data
    }
};