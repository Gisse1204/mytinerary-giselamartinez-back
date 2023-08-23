import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router();
const {getAllCities, getOneCities, createOneCities, updateOneCities, deleteOneCities} = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.post('/', createOneCities)
citiesRouter.get('/:id', getOneCities)
citiesRouter.put('/:id', updateOneCities);
citiesRouter.delete('/:id', deleteOneCities);

export default citiesRouter