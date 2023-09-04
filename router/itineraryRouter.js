import {Router} from 'express';
import itineraryController from '../controllers/itineraryController.js';

const itineraryRouter = Router();
const {getAllItinerary, getItinerariesByCityRelated, createOneItinerary, updateOneItinerary, deleteOneItinerary} = itineraryController

itineraryRouter.get('/', getAllItinerary)
itineraryRouter.get('/:cityId', getItinerariesByCityRelated)
itineraryRouter.post('/', createOneItinerary)
itineraryRouter.put( '/:id', updateOneItinerary)
itineraryRouter.delete( '/:id', deleteOneItinerary)

export default itineraryRouter