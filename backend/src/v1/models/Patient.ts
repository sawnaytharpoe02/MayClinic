import mongoose, { Schema } from 'mongoose';

export interface IPatient extends mongoose.Document {
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

const PatientSchema = new Schema(
  {
    petName: { type: String, required: true },
    status: { type: String, required: true },
    pawrent: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    township: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPatient>('Patient', PatientSchema);
