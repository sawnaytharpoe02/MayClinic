'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Grid,
  TextField,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import AddPatientBtn from './button/AddPatientBtn';
import Image from 'next/image';
import CommonDialog from './dialog/CommonDialog';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useSWR from 'swr';
import dayjs from 'dayjs';
import {
  getPatients,
  patientUrlEndPoint as cacheKey,
  deletePatient,
} from '@/utils/patient-api';
import CommonPatientForm from './form/CommonPatientForm';
import { IPatient } from '@/models/Patient';

const PatientList = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('' as string);
  const [selectedData, setSelectedData] = useState({});
  const [rows, setRows] = useState<any[]>([]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const {
    isLoading,
    data: patients,
    error,
    mutate,
  } = useSWR(cacheKey, getPatients);

  const handleClickActions = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedData(
      patients.data.filter(
        (patient: any) => patient._id === event.currentTarget.id
      )[0]
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddPatient = () => {
    setOpenDialog(true);
    setModalType('add');
  };

  const handleEditPatient = () => {
    setOpenDialog(true);
    setModalType('edit');
    handleClose();
  };

  const handleDeletePatient = async () => {
    await deletePatient({ id: (selectedData as PatientProps)?._id });
    mutate();
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  interface PatientProps {
    _id: string;
    petName: string;
    status: string;
    pawrent: string;
    breed: string;
    gender: string;
    dob: string | number | Date | dayjs.Dayjs | null | undefined;
    phone: string;
    address: string;
  }

  const handleMutationProcess = (data: IPatient) => {
    patients.data.filter((patient: PatientProps) => patient._id === data._id) &&
      mutate();
  };

  useEffect(() => {
    if (patients) {
      const data = patients.data.map(
        (patient: PatientProps, index: number) => ({
          rowId: index + 1,
          id: patient._id,
          petName: patient.petName,
          status: patient.status,
          pawrent: patient.pawrent,
          breed: patient.breed,
          gender: patient.gender,
          dob: dayjs(patient.dob).format('DD-MM-YYYY'),
          phone: patient.phone,
          address: patient.address,
        })
      );

      setRows(data);
    }
  }, [patients]);

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
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      flex: 3,
      disableColumnMenu: true,
      renderCell: (params) => {
        const row = params.row;
        return (
          <>
            <div>
              <IconButton
                aria-label="more"
                id={row?.id}
                aria-controls={open ? row?.id : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClickActions}>
                <Image
                  src="/resources/more.png"
                  alt="more icon"
                  width={12}
                  height={12}
                />
              </IconButton>
              <Menu
                id={row?.id}
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 30 * 4.5,
                    width: '15ch',
                    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.075)',
                  },
                }}>
                <MenuItem onClick={handleEditPatient}>
                  <Image
                    src="/resources/edit.png"
                    alt="edit icon"
                    width={16}
                    height={16}
                  />
                  <Typography ml={1} variant="body2">
                    Edit
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleDeletePatient}>
                  <Image
                    src="/resources/delete.png"
                    alt="delete icon"
                    width={16}
                    height={16}
                  />
                  <Typography ml={1} variant="body2">
                    Delete
                  </Typography>
                </MenuItem>
              </Menu>
            </div>
          </>
        );
      },
    },
  ];

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
            '.MuiDataGrid-cellContent': {
              fontSize: '0.8rem',
            },
            // '.MuiDataGrid-footerContainer': { display: 'none' },
          }}
        />
      </div>

      {openDialog && (
        <CommonDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title={modalType === 'add' ? 'Add New Patient' : 'Update Patient'}
          content={
            modalType === 'add'
              ? 'Enter new patient information below'
              : 'Enter update patient information below'
          }>
          <CommonPatientForm
            onClose={handleCloseDialog}
            selectedData={selectedData}
            handleMutationProcess={handleMutationProcess}
            modalType={modalType}
          />
        </CommonDialog>
      )}
    </Box>
  );
};

export default PatientList;
