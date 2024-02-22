import api from './axiosInstance';
import { IPatientProps } from '@/utils/interface';

export const patientUrlEndPoint = '/patients';

// export const getPatients = async () => {
//   const res = await api.get(patientUrlEndPoint);
//   return res.data;
// };

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
}: IPatientProps) => {
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

export const updatePatient = async (id: string, patient: IPatientProps) => {
  const response = await api.put(`${patientUrlEndPoint}/${id}`, patient);
  return response.data;
};

export const deletePatient = async ({ id }: { id: string }) => {
  const response = await api.delete(`${patientUrlEndPoint}/${id}`);
  return response.data;
};
