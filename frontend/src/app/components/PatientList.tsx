'use client';

import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Grid,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Autocomplete,
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
import { IPatientResProps } from '@/utils/interface';
import { status, breeds } from './form/options';

const PatientList = () => {
  const { data: patients, isLoading, mutate } = useSWR(cacheKey, getPatients);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('' as string);
  const [selectedData, setSelectedData] = useState({});
  const [selectedStatus, setSelectedStatus] = useState<{
    id: number;
    key: string;
    value: string;
  } | null>(null);
  const [selectedBreed, setSelectedBreed] = useState<{
    id: number;
    key: string;
    value: string;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('' as string);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickActions = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedData(
      patients?.data?.filter(
        (patient: IPatientResProps) => patient._id === event.currentTarget.id
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
    await deletePatient({ id: (selectedData as IPatientResProps)?._id });
    mutate();
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };



  const handleMutationProcess = (data: IPatientResProps) => {
    patients?.data?.filter(
      (patient: IPatientResProps) => patient._id === data._id
    ) && mutate();
  };

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
      headerAlign: 'center',
      align: 'center',
      flex: 2,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return (
          <Image
            src={`/resources/${
              params.row.status.toLowerCase() === 'allergy'
                ? 'allergy'
                : 'picky_eater'
            }.png`}
            alt={params.row.status}
            width={14}
            height={14}
          />
        );
      },
    },
    {
      field: 'pawrent',
      headerName: 'Pawrent',
      flex: 3,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'breed',
      headerName: 'Breed',
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
      flex: 3,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 3,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      flex: 1,
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

  const filteredPatients =
    patients?.data
      ?.filter(
        (pet: IPatientResProps) =>
          selectedStatus === null ||
          pet.status.toLowerCase() === selectedStatus.value.toLowerCase().trim()
      )
      .filter(
        (pet: IPatientResProps) =>
          selectedBreed === null || pet.breed === selectedBreed.value
      )
      .filter(
        (pet: IPatientResProps) =>
          pet.petName.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          pet.pawrent.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          pet.phone.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
      .map((pet: IPatientResProps, index: number) => ({
        rowId: index + 1,
        id: pet._id,
        petName: pet.petName,
        status: pet.status,
        pawrent: pet.pawrent,
        breed: pet.breed,
        gender: pet.gender,
        dob: dayjs(pet.dob).format('DD-MM-YYYY'),
        phone: pet.phone,
        address: pet.address,
      })) || [];

  return (
    <Box>
      <Box p={2}>
        {/* title */}
        <Typography variant="h1" color="primary">
          Patient List
        </Typography>

        <Grid container mt={1}>
          {/* left side block */}
          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Stack sx={{ maxWidth: '280px' }} spacing={2}>
              <Box>
                {/* Input Search Field */}
                <TextField
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="search patient"
                  sx={{
                    width: '100%',
                    '.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '0.6rem',
                    },
                    '.MuiInputBase-input.MuiOutlinedInput-input': {
                      borderRadius: '0.6rem',
                      p: '7px 0 7px 15px',
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
                <Box sx={{ width: '50%' }}>
                  <Autocomplete
                    id="status-select"
                    sx={{
                      width: '100%',
                      '.MuiInputBase-root.MuiOutlinedInput-root': {
                        borderRadius: '0.6rem',
                      },
                      '.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input':
                        {
                          p: '0 5px',
                          fontSize: '0.8rem',
                        },
                    }}
                    value={selectedStatus}
                    onChange={(_, item) => setSelectedStatus(item)}
                    options={status}
                    getOptionLabel={(option) => option.value}
                    renderOption={(props, option) => (
                      <Box component="li" {...props} key={option.key}>
                        {option.value}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="status all" />
                    )}
                  />
                </Box>
                <Box sx={{ width: '50%' }}>
                  <Autocomplete
                    id="breed-select"
                    sx={{
                      width: '100%',
                      '.MuiInputBase-root.MuiOutlinedInput-root': {
                        borderRadius: '0.6rem',
                      },
                      '.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input':
                        {
                          p: '0 5px',
                          fontSize: '0.8rem',
                        },
                    }}
                    value={selectedBreed}
                    onChange={(_, item) => setSelectedBreed(item)}
                    options={breeds}
                    getOptionLabel={(option) => option.value}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        {...props}
                        key={option.key}
                        sx={{ fontSize: '0.8rem' }}>
                        {option.value}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="breed all" />
                    )}
                  />
                </Box>
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
              <Box sx={{ border: '1px solid white' }}></Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Data Table */}
      <div style={{ height: 365, width: '100%' }}>
        {isLoading ? (
          <div>loading ny dl...</div>
        ) : (
          <DataGrid
            rows={filteredPatients}
            columns={columns}
            getRowId={(row: any) => row._id + row.petName}
            loading={!patients}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection
            sx={{
              borderRadius: 0,
              border: 'none',
              borderTop: '1px solid #e0e0e0',
              '.MuiCheckbox-root .MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root':
                {
                  fontSize: '1.2rem',
                },
              '.MuiDataGrid-columnSeparator.MuiDataGrid-columnSeparator--sideRight':
                {
                  color: 'transparent',
                },
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
              '.MuiSelect-select.MuiTablePagination-select': {
                background: (theme) => theme.palette.primary.main,
                borderRadius: '0.5rem',
                color: '#fff',
              },
              '.MuiTablePagination-selectLabel': {
                fontSize: '13px',
              },
              '.MuiTablePagination-selectIcon': {
                color: '#fff',
              },
              '.MuiIconButton-root': {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          />
        )}
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
            selectedData={selectedData as IPatientResProps}
            handleMutationProcess={handleMutationProcess}
            modalType={modalType}
          />
        </CommonDialog>
      )}
    </Box>
  );
};

export default PatientList;
