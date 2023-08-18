import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router();
const {getAllCities, getOneCities, createOneCities} = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.post('/', createOneCities)
citiesRouter.get('/:id', getOneCities)

export default citiesRouter