import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 5,
    max: 30,
    lowerCase: 3,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
    requirementCount: 4,
  };

export const signUpSchema = joi.object({
    firstname: joi.string() .min(3) .max(15) .required() .pattern(/^[A-Za-zÀ-ÿ\s]+$/u) .messages({
        'string.min':'First name field must contain at least 3 characters',
        'string.max':'First name field must contain 15 characters or less',
        'string.empty':'This field cannot be empty, it is required',
        'string.pattern.base':'First name field must only contain letters, no numbers or special characters are allowed'
    }),
    lastname: joi.string() .min(3) .max(15) .required() .pattern(/^[A-Za-zÀ-ÿ]+$/u) .messages({
        'string.min':'Last name field must contain at least 3 characters',
        'string.max':'Last name field must contain 15 characters or less',
        'string.empty':'This field cannot be empty, it is required',
        'string.pattern.base':'Last name field must only contain letters, no numbers, spaces or special characters are allowed'
    }),
    email: joi.string() .email() .required().messages({
        'string.email':'You must enter a valid email',
        'string.empty':'This field cannot be empty, it is required',
        'string.email': 'This field must contain an @ and .com'
    }),
    password: joiPwd(complexityOptions) .required().messages({
        'string.empty': 'The password field cannot be empty, it is required',
        'passwordComplexity.tooShort': 'Password is too short, it must have at least 5 characters',
        'passwordComplexity.tooLong': 'Password is too long, it must not have more than 30 characters',
        'passwordComplexity.lowercase': 'Password must contain at least 3 lowercase letter',
        'passwordComplexity.uppercase': 'Password must contain at least 1 uppercase letter',
        'passwordComplexity.numeric': 'Password must contain at least 1 number',
        'passwordComplexity.symbol': 'Password must not contain special characters',
    }),
    photourl: joi.string() .uri().messages({
        'string.min':'The URL entered is not valid, please select another URL',
        'string.empty':'This field cannot be empty, it is required'
    }),
    country: joi.string().messages({
        'string.empty':'This field cannot be empty, it is required',
    }),
    verified: joi.boolean(),
        
    googleUser: joi.boolean(),
})