import 'dotenv/config.js'
import express from "express"
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'
import './config/database.js'
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFounfHandler.js'

const server = express();

/* const corsOption ={
    origin:'http://localhost:5173/'
} */
//server.use(cors(corsOptions))
server.use(cors())

server.use(express.json())

server.use('/api', (request, response, next) => {
    console.log('Hiciste una petición a mi backend a la ruta: ', request.url, "a la hora: ", new Date().toLocaleString())
    console.log(request.method)
        next()
}, indexRouter)

server.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor')
})

server.use(notFoundHandler)

server.use(errorHandler)

server.listen(process.env['PORT'], ()=> {console.log('Servidor corriendo en puerto ' + process.env['PORT'])})