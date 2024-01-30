import { Request, Response, NextFunction } from 'express';
import { getAllPatientsService, getOnePatientService, createPatientService } from '../services/patient.services';

const getAllPatients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return getAllPatientsService(req, res, next);
};

const getOnePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return getOnePatientService(req, res, next);
};

const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return createPatientService(req, res, next);
};

export { getAllPatients, getOnePatient, createPatient };
