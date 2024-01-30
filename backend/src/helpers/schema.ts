import Joi from 'joi';

export const AllSchema = {
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
};

export const PatientSchema = Joi.object({
  petName: Joi.string().required(),
  status: Joi.string().required().messages({
    'string.base': 'Status must be a string',
    'any.required': 'Status is required',
  }),
  pawrent: Joi.string().required().messages({
    'string.base': 'Pawrent must be a string',
    'any.required': 'Pawrent is required',
  }),
  breed: Joi.string().required().messages({
    'string.base': 'Breed must be a string',
    'any.required': 'Breed is required',
  }),
  gender: Joi.string().required().messages({
    'string.base': 'Gender must be a string',
    'any.required': 'Gender is required',
  }),
  dob: Joi.string().required().messages({
    'string.base': 'Date of birth must be a string',
    'any.required': 'Date of birth is required',
  }),
  phone: Joi.string().required().min(6).max(11).messages({
    'string.base': 'Phone must be a string',
    'any.required': 'Phone is required',
    'string.min': 'Phone must be at least {#limit} characters long',
    'string.max': 'Phone must be at most {#limit} characters long',
  }),
  address: Joi.string().required().messages({
    'string.base': 'Address must be a string',
    'any.required': 'Address is required',
  }),
  city: Joi.string().required().messages({
    'string.base': 'City must be a string',
    'any.required': 'City is required',
  }),
  township: Joi.string().required().messages({
    'string.base': 'Township must be a string',
    'any.required': 'Township is required',
  }),
});
