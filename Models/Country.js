import { Schema, model } from "mongoose";

const countrySchema = Schema({
    country: { type: String, required: true },
    description: { type: String },
}, {
    timestamps: true
})


const Country = model('country', countrySchema)

export default Country