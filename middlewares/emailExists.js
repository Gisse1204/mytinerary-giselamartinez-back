import User from "../Models/User.js";

export const emailExists = async (req, res, next) =>{
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'Email already exists',
    })
}

export default emailExists