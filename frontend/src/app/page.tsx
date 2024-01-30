import React from 'react';
import { Paper, Box } from '@mui/material';
import Navbar from '@/app/components/Navbar';
import PatientList from './components/PatientList';

export default function Home() {
  return (
    <>
      <Paper sx={{ Height: '100vh' }}>
        <Navbar />
        <Paper sx={{ p: 2 }}>
          <Box
            sx={{
              height: `calc(100vh - 106px)`,
              background: '#fff',
              borderRadius: '0.5rem',
            }}>
            <PatientList/>
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
