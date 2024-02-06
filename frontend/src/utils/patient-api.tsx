import api from './axiosInstance';
import { IPatientList, IPatient } from '@/models/Patient';

export const getPatient = async (id: string) => {
  const response = await api.get<IPatient>(`/patients/${id}`);
  return response.data;
};

export const getPatientsList = async () => {
  const response = await api.get<IPatientList>('/patients');
  return response.data?.data;
};

export const addPatient = async (patient: IPatient) => {
  const response = await api.post<IPatient>('/patients', patient);
  return response.data;
}