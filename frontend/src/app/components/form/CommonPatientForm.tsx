'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  PatientSchemaType,
  patientSchema,
} from '@/lib/validations/patientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Grid,
  TextField,
  FormLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  Radio,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { cities, status, townships, breeds } from './constants';
import CommonFormBtn from '../button/CommonFormBtn';
import * as PatientApi from '@/utils/patient-api';

const CommonPatientForm = ({ onClose }: { onClose: () => void }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      petName: '',
      status: '',
      gender: '',
      pawrent: '',
      breed: '',
      dob: null,
      phone: '',
      address: '',
      city: '',
      township: '',
    },
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = async (data: PatientSchemaType) => {
    const payload = { ...data, dob: dayjs(data.dob).format('YYYY-MM-DD') };
    const result = await PatientApi.addPatient(payload);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt={2} mb={3}>
        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="petName" sx={{ color: '#000', fontWeight: 400 }}>
            Pet Name
          </FormLabel>
          <Controller
            name="petName"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                id="petName"
                error={!!errors.petName}
                helperText={errors.petName?.message}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="pawrent" sx={{ color: '#000', fontWeight: 400 }}>
            Status
          </FormLabel>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.status}>
                <Select id="status" labelId="status" {...field}>
                  {status.map((status) => (
                    <MenuItem
                      key={`${status.id}_${status.key}`}
                      value={status.key}>
                      {status.value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.status && (
                  <FormHelperText>{errors.status?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="pawrent" sx={{ color: '#000', fontWeight: 400 }}>
            Pawrent
          </FormLabel>
          <Controller
            name="pawrent"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                id="pawrent"
                error={!!errors.pawrent}
                helperText={errors.pawrent?.message}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="breed" sx={{ color: '#000', fontWeight: 400 }}>
            Breed
          </FormLabel>
          <Controller
            name="breed"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.breed}>
                <Select id="breed" labelId="breed" {...field}>
                  {breeds.map((breed) => (
                    <MenuItem
                      key={`${breed.id}_${breed.key}`}
                      value={breed.key}>
                      {breed.value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.status && (
                  <FormHelperText>{errors.breed?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="gender" sx={{ color: '#000', fontWeight: 400 }}>
            Gender
          </FormLabel>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.gender}>
                <RadioGroup row id="gender" {...field}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                {errors.gender && (
                  <FormHelperText>{errors.gender?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="dob" sx={{ color: '#000', fontWeight: 400 }}>
            Date of Birth
          </FormLabel>
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                value={field.value ? dayjs(field.value) : null}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!errors.dob,
                    helperText: errors.dob?.message,
                  },
                }}
                onChange={(date) => {
                  field.onChange(date?.toDate());
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="phone" sx={{ color: '#000', fontWeight: 400 }}>
            Contact Phone No
          </FormLabel>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                id="phone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="address" sx={{ color: '#000', fontWeight: 400 }}>
            Address
          </FormLabel>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                id="address"
                error={!!errors.address}
                helperText={errors.address?.message}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="city" sx={{ color: '#000', fontWeight: 400 }}>
            City
          </FormLabel>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.city}>
                <Select id="city" labelId="city" {...field}>
                  {cities.map((city) => (
                    <MenuItem key={`${city.id}_${city.key}`} value={city.key}>
                      {city.value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.city && (
                  <FormHelperText>{errors.city?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormLabel htmlFor="township" sx={{ color: '#000', fontWeight: 400 }}>
            Township
          </FormLabel>
          <Controller
            name="township"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.township}>
                <Select id="township" labelId="township" {...field}>
                  {townships.map((township) => (
                    <MenuItem
                      key={`${township.id}_${township.key}`}
                      value={township.key}>
                      {township.value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.township && (
                  <FormHelperText>{errors.township?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <CommonFormBtn variant="contained" type="submit">
          <Typography color="#fff">Save</Typography>
        </CommonFormBtn>
        <CommonFormBtn variant="outlined">
          <Typography color="#000" onClick={onClose}>
            Cancel
          </Typography>
        </CommonFormBtn>
      </Box>
    </form>
  );
};

export default CommonPatientForm;