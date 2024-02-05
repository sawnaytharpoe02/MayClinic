import { z } from 'zod';

export const patientSchema = z.object({
  petName: z
    .string()
    .min(2, { message: 'pet name has to be at least 2 chararcters' }),
  status: z.string(),
  gender: z.string({
    errorMap: () => {
      return { message: 'You have to select a gender' };
    },
  }),
  pawrent: z
    .string()
    .min(2, { message: 'pawrent name has to be at least 2 characters' }),
  breed: z.string(),
  dob: z.string().nullable(),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: 'phone number has to be a number' })
    .min(8, { message: 'phone number has to be at least 8 digits' })
    .max(11, { message: 'phone number has to be at most 11 digits' }),
  address: z.string(),
  city: z.string(),
  township: z.string(),
});


export type PatientSchemaType = z.infer<typeof patientSchema>;
