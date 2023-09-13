import {Router} from 'express';
import citiesRouter from './citiesRouter.js';
import itineraryRouter from './itineraryRouter.js';
import authRouter from './authRouter.js';

const indexRouter = Router();

indexRouter.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor en /api')
})

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itinerary', itineraryRouter)
indexRouter.use('/auth', authRouter)


export default indexRouter