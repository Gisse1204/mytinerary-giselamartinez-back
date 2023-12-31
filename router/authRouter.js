import {Router} from 'express';
import authController from '../controllers/authController.js';
import { signInSchema } from '../validators/signInValidator.js';
import { signUpSchema } from '../validators/signUpValidator.js';
import validator from './../middlewares/validator.js';
import emailExists from './../middlewares/emailExists.js';
import passport from './../middlewares/passport.js';


const authRouter = Router()
const { signUp, signIn, loginWithToken } = authController

authRouter.post('/up', validator(signUpSchema), emailExists, signUp)
authRouter.post('/in', validator(signInSchema), signIn)
authRouter.get('/token', passport.authenticate ('jwt', {session:false}), loginWithToken)


export default authRouter
