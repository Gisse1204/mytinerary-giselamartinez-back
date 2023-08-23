import {Schema, model} from "mongoose";

const citySchema = Schema({
    name: {type: String, required: true},
    country: {type: Schema.Types.ObjectId, ref:'country', required: true},
    description: {type: String},
    image: {type: String, required: true},
    currency: {type: String, required: true},
    price: {type: Number, required: true},
},{
    timestamps:true
})

const City = model('city', citySchema)

export default City