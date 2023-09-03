import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    title: {type:String, required:true},
    autor: {
        fullName: { type: String, required: true },
        profilePhoto: { type: String, required: true }
    },
    price: {type:Number, required:true, max:5, min:1},
    duration: {type:Number, required:true, max: 9, min:1},
    like: {type:String, required:true},
    hashTags: [{type:String, required:true}],
    comments: {type:String, required:true},
    cityRelated: {type: Schema.Types.ObjectId, ref: 'City', required: true},
}, {
    timestamps: true
})

const Itinerary = model('itinerary', itinerarySchema)

export default Itinerary