export interface IPatient {
  _id?:string;
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
