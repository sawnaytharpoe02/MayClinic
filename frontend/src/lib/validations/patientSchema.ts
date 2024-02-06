import { z } from 'zod';

export const patientSchema = z.object({
  petName: z
    .string()
    .nonempty('pet name is required')
    .min(2, { message: 'pet name has to be at least 2 chararcters' }),
  status: z.string().nonempty('status is required'),
  gender: z
    .string({
      errorMap: () => {
        return { message: 'You have to select a gender' };
      },
    })
    .nonempty('gender is required'),
  pawrent: z
    .string()
    .nonempty('pawrent name is required')
    .min(2, { message: 'pawrent name has to be at least 2 characters' }),
  breed: z.string().nonempty('breed is required'),
  dob: z.date().nullable(),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: 'phone number has to be a number' })
    .min(8, { message: 'phone number has to be at least 8 digits' })
    .max(11, { message: 'phone number has to be at most 11 digits' }),
  address: z.string().nonempty('address is required'),
  city: z.string().nonempty('city is required'),
  township: z.string().nonempty('township is required'),
});

export type PatientSchemaType = z.infer<typeof patientSchema>;
