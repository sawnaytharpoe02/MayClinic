import api from './axiosInstance';
import { IPatient } from '@/models/Patient';

export const patientUrlEndPoint = '/patients';

// export const getPatient = async (id: string) => {
//   const response = await api.get(`/patients/${id}`);
//   return response.data;
// };

// export const getPatientsList = async () => {
//   const response = await api.get<IPatientList>('/patients');
//   return response.data?.data;
// };

// export const addPatient = async (patient: IPatient) => {
//   const response = await api.post<IPatient>('/patients', patient);
//   return response.data;
// }

export const getPatients = async () => {
  const response = await api.get(patientUrlEndPoint);
  return response.data;
};

export const getPatient = async (id: string) => {
  const response = await api.get(`${patientUrlEndPoint}/${id}`);
  return response.data;
};

export const addPatient = async ({
  petName,
  status,
  gender,
  pawrent,
  breed,
  dob,
  phone,
  address,
  city,
  township,
}: IPatient) => {
  // if (Math.random() < 0.5) throw new Error('Failed to add new item!');
  const response = await api.post(patientUrlEndPoint, {
    petName,
    status,
    gender,
    pawrent,
    breed,
    dob,
    phone,
    address,
    city,
    township,
  });
  return response.data;
};

export const updatePatient = async (id: string, patient: IPatient) => {
  const response = await api.put(`${patientUrlEndPoint}/${id}`, patient);
  return response.data;
};

export const deletePatient = async ({ id }: { id: string }) => {
  const response = await api.delete(`${patientUrlEndPoint}/${id}`);
  return response.data;
};
