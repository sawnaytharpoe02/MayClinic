import Patient, { IPatient } from '../models/Patient';
import { Request, Response, NextFunction } from 'express';
import { resMessage } from '../../helpers/res.message';
import { HTTP_STATUS_CODES } from '../../helpers/status';

const getAllPatientsService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const patients: IPatient[] = await Patient.find().sort({ createdAt: -1 });
    resMessage(
      res,
      HTTP_STATUS_CODES.OK,
      'OK',
      'Retrieve all patients successfully.',
      patients
    );
  } catch (err: any) {
    next(new Error(`Error: ${err}`));
  }
};

const getOnePatientService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const patient: IPatient | null = await Patient.findById(req.params.id);
    if (patient) {
      resMessage(
        res,
        HTTP_STATUS_CODES.OK,
        'OK',
        'Retrieve patient successfully.',
        patient
      );
    } else {
      resMessage(
        res,
        HTTP_STATUS_CODES.NOT_FOUND,
        'NOT_FOUND',
        'Patient not found.',
        null
      );
    }
  } catch (err: any) {
    next(new Error(`Error: ${err}`));
  }
};

const createPatientService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const patient: IPatient | null = await Patient.findOne({
      phone: req.body.phone,
    });

    if (patient) {
      resMessage(
        res,
        HTTP_STATUS_CODES.DUPLICATE_RESOURCE,
        'DUPLICATE_RESOURCE',
        'Patient phone number already exists.',
        null
      );
    } else {
      const newPatient: IPatient = new Patient(req.body);
      await newPatient.save();

      resMessage(
        res,
        HTTP_STATUS_CODES.CREATED,
        'CREATED',
        'Patient created successfully.',
        newPatient
      );
    }
  } catch (err: any) {
    next(new Error(`Error: ${err}`));
  }
};

export { getAllPatientsService, getOnePatientService, createPatientService };
