import Country from "../Models/Country.js";

const countryController = {
    getAllCountry: async (request, response, next) => {
        try {
            const country = await Country.find()
            response.status(201).json( { response : country } )
        } catch (error) {
            response.status(500).json( {error})
        }    
    },

    getOneCountry: async (request, response, next) => {        
    },

    createOneCountry: async (request, response, next) => {
        try {
            const country = await Country.create( request.body )
            response.status(201).json( { response : country } )
        } catch (error) {
            response.status(500).json( {error})
        }       
    },

    updateOneCountry : async(request, response, next) => {        
    },
    
    deleteOneCountry : async(request, response, next) => {    
    },
}

export default countryController;