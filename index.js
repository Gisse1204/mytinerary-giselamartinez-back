import express from "express";
import indexRouter from "./router/indexRouter.js";

const server = express();
server.use('/api', indexRouter)

server.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor')
})


server.listen(1212, ()=> {console.log('Servidor corriendo en puerto 1212')})