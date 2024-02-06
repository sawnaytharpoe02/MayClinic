export interface IPatientList {
  data: { _id: string }[];
}

export interface IPatient {
  petName: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  dob: string;
  phone: string;
  address: string;
  city: string;
  township: string;
}
