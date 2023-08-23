import { Router } from 'express';
import countryController from '../controllers/countryController.js';

const countryRouter = Router();
const {getAllCountry, getOneCountry, createOneCountry, updateOneCountry, deleteOneCountry} = countryController

countryRouter.get('/', countryController.getAllCountry)
countryRouter.get('/:id', countryController.getOneCountry)
countryRouter.post('/', countryController.createOneCountry)
countryRouter.put( '/:id', countryController.updateOneCountry)
countryRouter.delete( '/:id', countryController.deleteOneCountry)

export default countryRouter