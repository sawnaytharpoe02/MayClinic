import { Router } from 'express';
import {
  getAllPatients,
  getOnePatient,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patient.controller';
import {
  validateParamsId,
  validateReqBodyPatient,
} from '../../middeware/validation';

const router = Router();

router
  .route('/')
  .get(getAllPatients)
  .post([validateReqBodyPatient, createPatient]);

router
  .route('/:id')
  .get([validateParamsId, getOnePatient])
  .put([validateParamsId, updatePatient])
  .delete([validateParamsId, deletePatient]);

export default router;
