import createError from 'http-errors'

const notFoundHandler =(request, response, next)=>{
    next(createError(404, 'Error route not found'))
}

export default notFoundHandler