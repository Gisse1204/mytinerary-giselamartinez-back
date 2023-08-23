import cities from '../cities.js'
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
            error = err;
            return next(err)
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
        console.log(id);
        let cities;
        let error = null;
        let success = true;
        try {
            cities = await City.findById(id);
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
        let cities;
        let error = null;
        let success = true;        
        try {
            /* const newCity = new City(request.body)
            await newCity.save()
            console.log(newCity) */            
            cities = await City.create(request.body)
            console.log(cities);
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
        
        updateOneCities: async (request, response, next) => {
            const { id } = request.params;
            let cities;
            let success = true;
            try {
                cities = await City.findOneAndUpdate({ _id: id }, request.body, { new: true });
                response.json({
                    response: cities,
                    success
                })
            } catch (err) {
                success = false;
                next(err);
            };
        },

        deleteOneCities: async (request, response, next) => {
            const { id } = req.params
            let cities;
            let success = true;
            try {
                cities = await City.findOneAndDelete( {_id: id} )
                res.json({
                    response: cities,
                    success
                })
            } catch (err) {
                success = false;
                next(err)
            }
        },
    }

export default citiesController;