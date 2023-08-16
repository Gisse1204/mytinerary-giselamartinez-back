import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router();
const {getAllCities, getOneCities} = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.get('/:id', getOneCities)

export default citiesRouter