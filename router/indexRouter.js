import {Router} from 'express';
import citiesRouter from './citiesRouter.js';

const indexRouter = Router();

indexRouter.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor en /api')
})

indexRouter.use('/cities', citiesRouter)

export default indexRouter