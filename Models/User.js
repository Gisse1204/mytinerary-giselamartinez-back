import { Schema, model } from "mongoose";

const userSchema = Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    email: {type:String, required:true, unique: true,},
    password: {type:String, required:true},
    photourl: { type: String, default: "https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?w=185&h=195&c=7&r=0&o=5&pid=1.7.png" },
    country: {type:String},
    verified: {type: Boolean, default:false},
    googleUser: { type: Boolean, default: false },
}, {
    timestamps: true
});
const User = model('user', userSchema);

export default User;