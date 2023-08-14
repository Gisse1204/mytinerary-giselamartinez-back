import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';


const indexRouter = Router();
const {getAllCities} = citiesController

indexRouter.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor en /api')
})

indexRouter.get('/cities', getAllCities)

export default indexRouter