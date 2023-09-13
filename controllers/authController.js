import User from "../Models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authController = {
    signUp: async(req, res, next) => {
        try{
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash)
            let body ={...req.body}
            body.password=passwordHash

            const newUser = await User.create(body)
            const token = jwt.sign({email: newUser.email, firstname: newUser.firstname, lastname: newUser.lastname, photourl: newUser.photourl}, process.env.SECRET_KEY, {expiresIn:'1h'})
            return res.status(201).json({
                succes:true,
                userData: newUser,
                token: token,
                message: 'Sign up successfully'
            })

        }catch (error){
            console.log(error);
            next(error)
        }
    },

    signIn : async (req, res, next) =>{
        try{
            let {email:emailBody, password} = req.body
            const userInDB = await User.findOne({email:emailBody})
            if (!userInDB){
                throw new Error ("No user exists with this email")
            }

            let passwordValidated = bcrypt.compareSync (password, userInDB.password)
            if (!passwordValidated){
                throw new Error("The Email/Password is incorrect")
            }

            let {email, firstname, lastname, photourl} = userInDB
            const token = jwt.sign({email, firstname, lastname, photourl}, process.env.SECRET_KEY, {expiresIn:'1h'})
            return res.status(200).json({
                succes: true,
                userData: {email, firstname, lastname, photourl},
                token: token,
                message: 'Sign in successfully'
            })
        }
        catch (error){
            console.groupCollapsed(error);
            next (error)
        }
    },

    loginWithToken: (req, res)=>{
        const {email, firstname, lastname, photourl} = req.user
        res.status(200).json({
            succes: true,
            userData: {email, firstname, lastname, photourl},
            message: 'Sign in successfully'
        })
    },
}

export default authController;