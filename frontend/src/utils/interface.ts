export interface IPatientProps {
  petName: string;
  status: string;
  gender: string;
  pawrent: string;
  breed: string;
  dob: string | null;
  phone: string;
  address: string;
  city: string;
  township: string;
}

export interface IPatientResProps {
  _id: string;
  petName: string;
  status: string;
  gender: string;
  pawrent: string;
  breed: string;
  dob: string | null;
  phone: string;
  address: string;
  city: string;
  township: string;
  createdAt: string;
  updatedAt: string;
}

// interface PatientProps {
//   _id: string;
//   petName: string;
//   status: string;
//   pawrent: string;
//   breed: string;
//   gender: string;
//   dob: string | number | Date | dayjs.Dayjs | null | undefined;
//   phone: string;
//   address: string;
// }
