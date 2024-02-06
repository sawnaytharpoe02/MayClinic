'use client';

import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Grid, TextField } from '@mui/material';
import AddPatientBtn from './button/AddPatientBtn';
import Image from 'next/image';
import CommonDialog from './dialog/CommonDialog';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useSWR from 'swr';
import * as PatientApi from '../../utils/patient-api';
import dayjs from 'dayjs';

const columns: GridColDef[] = [
  {
    field: 'rowId',
    headerName: 'ID',
    flex: 1,
    disableColumnMenu: true,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
  },
  {
    field: 'petName',
    headerName: 'Pet Name',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'pawrent',
    headerName: 'Pawrent',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'dob',
    headerName: 'Date of Birth',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'phone',
    headerName: 'Contact Phone No.',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 2,
    disableColumnMenu: true,
    sortable: false,
  },
];

const PatientList = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('' as string);
  const [rows, setRows] = useState<any[]>([]);

  const handleAddPatient = () => {
    setOpenDialog(true);
    setModalType('add');
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const { data: patientsData } = useSWR(
    'http://localhost:8800/api/v1/patients',
    PatientApi.getPatientsList,
    { refreshInterval: 1000 }
  );

  useEffect(() => {
    if (patientsData) {
      const data = patientsData.map((patient: any, index) => ({
        rowId: index + 1,
        petName: patient.petName,
        status: patient.status,
        pawrent: patient.pawrent,
        breed: patient.breed,
        gender: patient.gender,
        dob: dayjs(patient.dob).format('DD/MM/YYYY'),
        phone: patient.phone,
        address: patient.address,
      }));

      setRows(data);
    }
  }, [patientsData]);

  return (
    <Box>
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
      </Box>

      {/* Data Table */}
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row: any) => row._id + row.petName}
          loading={rows?.length === 0}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            borderRadius: 0,
            '.MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,.MuiDataGrid-cell:focus-within,.MuiDataGrid-columnHeader:focus-within':
              {
                outline: 'none',
              },
            '.MuiDataGrid-columnHeaderTitleContainer': {
              color: (theme) => theme.palette.primary.main,
            },
            '.MuiDataGrid-footerContainer': { display: 'none' },
          }}
        />
      </div>

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
