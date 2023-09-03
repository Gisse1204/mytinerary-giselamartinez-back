import {Router} from 'express';
import itineraryController from '../controllers/itineraryController.js';

const itineraryRouter = Router();
const {getAllItinerary, getOneItinerary, createOneItinerary, updateOneItinerary, deleteOneItinerary} = itineraryController

itineraryRouter.get('/', getAllItinerary)
itineraryRouter.get('/:id', getOneItinerary)
itineraryRouter.post('/', createOneItinerary)
itineraryRouter.put( '/:id', updateOneItinerary)
itineraryRouter.delete( '/:id', deleteOneItinerary)

export default itineraryRouter