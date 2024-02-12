import React from 'react';
import { Paper, Box } from '@mui/material';
import Navbar from '@/app/components/Navbar';
import PatientList from './components/PatientList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export default function Home() {
  return (
    <>
      <Paper sx={{ Height: '100vh' }}>
        <Navbar />
        <Paper sx={{ p: 2, background: '#ECEBCE' }}>
          <Box
            sx={{
              height: `calc(100vh - 106px)`,
              background: '#fff',
              borderRadius: '0.5rem',
            }}>
            <PatientList />
            <ToastContainer
              icon={false}
              closeOnClick
              pauseOnHover
              position="bottom-left"
              theme="colored"
              limit={1}
              autoClose={2000}
            />
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
