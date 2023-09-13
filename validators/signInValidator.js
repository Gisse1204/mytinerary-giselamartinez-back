import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions ={
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
  };

  export const signInSchema = joi.object({
    email: joi.string() .email() .required() .messages({
        'string.empty': 'This field cannot be empty',
        'any.required': 'This field  it is required',
        'string.email': 'This field must contain an @ and .com'
    }),
    password: joiPwd (complexityOptions) .messages({
        'string.empty': 'The password field cannot be empty, it is required',
        'passwordComplexity.tooShort': 'Password is too short, it must have at least 5 characters',
        'passwordComplexity.tooLong': 'Password is too long, it must not have more than 30 characters',
        'passwordComplexity.lowercase': 'Password must contain at least 3 lowercase letter',
        'passwordComplexity.uppercase': 'Password must contain at least 1 uppercase letter',
        'passwordComplexity.numeric': 'Password must contain at least 1 number',
        'passwordComplexity.symbol': 'Password must not contain special characters',
    })
  })