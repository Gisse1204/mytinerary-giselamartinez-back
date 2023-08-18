import {Schema, model} from "mongoose";

const citySchema = Schema({
    name: {type: String, require: true},
    country: {type: String, require: true},
    description: {type: String},
    image: {type: String, require: true},
    currency: {type: String, require: true},
    price: {type: Number, require: true},
},{
    timestamps:true
})

const City = model('citie', citySchema)

export default City