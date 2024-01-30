import { Request, Response, NextFunction } from 'express';
import { AllSchema, PatientSchema } from '../helpers/schema';
import { ObjectSchema } from 'joi';

const validateParams = (schema: ObjectSchema<any>, type: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    let obj: { [key: string]: any } = {};
    obj[type] = req.params[type];
    const { error } = schema.validate(obj);

    if (error) {
      console.log(error);
      return next(new Error(error.details[0].message));
    }

    next();
  };
};

const validateReqBody = (schema: ObjectSchema<any>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    next();
  };
};

const validateParamsId = validateParams(AllSchema.params, 'id');
const validateReqBodyPatient = validateReqBody(PatientSchema);

export { validateParamsId, validateReqBodyPatient };
