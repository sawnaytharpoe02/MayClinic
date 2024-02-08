import { Request, Response, NextFunction } from 'express';
import {
  getAllPatientsService,
  getOnePatientService,
  createPatientService,
  updatePatientService,
  deletePatientService,
} from '../services/patient.services';

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

const updatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return updatePatientService(req, res, next);
};

const deletePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return deletePatientService(req, res, next);
};

export {
  getAllPatients,
  getOnePatient,
  createPatient,
  updatePatient,
  deletePatient,
};
