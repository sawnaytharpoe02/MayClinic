import Joi from 'joi';

export const AllSchema = {
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
};

export const PatientSchema = Joi.object({
  petName: Joi.string().min(2).required(),
  status: Joi.string().required(),
  pawrent: Joi.string().required(),
  breed: Joi.string().required(),
  gender: Joi.string().required(),
  dob: Joi.string().optional(),
  phone: Joi.string().required().min(6).max(11),
  address: Joi.string().required(),
  city: Joi.string().required(),
  township: Joi.string().required(),
});
