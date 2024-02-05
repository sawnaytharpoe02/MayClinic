'use client';

import React, { useState } from 'react';
import { Box, Stack, Typography, Grid, TextField } from '@mui/material';
import AddPatientBtn from './button/AddPatientBtn';
import Image from 'next/image';
import CommonDialog from './dialog/CommonDialog';

const PatientList = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('' as string);

  const handleAddPatient = () => {
    setOpenDialog(true);
    setModalType('add');
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box p={2}>
      {/* title */}
      <Typography variant="h1" color="primary">
        Patient List
      </Typography>

      <Grid container mt={2}>
        {/* left side block */}
        <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
          <Stack sx={{ maxWidth: '280px' }} spacing={2}>
            <Box>
              {/* Input Search Field */}
              <TextField
                placeholder="search patient"
                sx={{
                  width: '100%',
                  '.MuiInputBase-root.MuiOutlinedInput-root': {
                    borderRadius: '0.6rem',
                  },
                  '.MuiInputBase-input': {
                    p: '5px 0 5px 15px',
                    borderRadius: '0.6rem',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <Image
                      src="/resources/search.png"
                      alt="search icon"
                      width={12}
                      height={12}
                    />
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ width: '50%' }}>select box one</Box>
              <Box sx={{ width: '50%' }}>select box two</Box>
            </Box>
          </Stack>
        </Grid>

        {/* right side block */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          }}>
          <Stack sx={{ width: '200px' }} spacing={2}>
            <Box sx={{ border: '1px solid white' }}>
              <AddPatientBtn onClick={handleAddPatient}>
                Add new patient
              </AddPatientBtn>
            </Box>
            <Box sx={{ border: '1px solid white' }}>paginate</Box>
          </Stack>
        </Grid>
      </Grid>

      {openDialog && (
        <CommonDialog
          open={openDialog}
          handleClose={handleClose}
          title={modalType === 'add' ? 'Add New Patient' : 'Update Patient'}
          content={
            modalType === 'add'
              ? 'Enter new patient information below'
              : 'Enter update patient information below'
          }
        />
      )}
    </Box>
  );
};

export default PatientList;
