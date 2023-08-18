import cities from '../cities.js';
import City from '../Models/City.js'

const citiesController = {
    getAllCities: async (request, response, next) => {
        let cities;
        let error = null;
        let success = true;
        try {
            cities = await City.find()
        } catch (err) {
            console.log(err)
            success = false,
            error = err
        }

        response.json({
            response: cities,
            success,
            error
        })
    },

    getOneCities: async (request, response, next) => {
        console.log (request.params)
        const {id} = request.params
        const {name} = request.body
        console.log(id);
        let cities;
        let error = null;
        let success = true;
        try {
            cities = await City.findOne({_id: id, name: name});
        } catch (err) {
            console.log(err)
            success = false,
            error = err
        }

        response.json({
            response: cities,
            success,
            error
        })
    },

    createOneCities:async (request, response, next) => {        
        console.log(request.body);
        let city;
        let error = null;
        let success = true;
        
        try {
            /* const newCity = new City(request.body)
            await newCity.save()
            console.log(newCity) */
            
            city = await City.create(request.body)
            console.log(city);

        } catch (err) {
            console.log(err)
                success = false,
                error = error
            }
            response.json({
                response: city,
                success,
                error
            })
        }    
    }


export default citiesController