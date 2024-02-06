import * as PatientApi from '../utils/patient-api';
import { AxiosError } from 'axios';
import useSWR from 'swr';

const usePatient = (id: string) => {
  const { data, isLoading } = useSWR(id, async () => {
    try {
      return await PatientApi.getPatient(id);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });

  return {
    patient: data,
    patientLoading: isLoading,
  };
};

export default usePatient;
