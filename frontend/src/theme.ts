'use client';

import { BorderRight, Padding } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#54BAB9',
    },
    secondary: {
      main: '#EDC339',
    },
    error: {
      main: '#CD211D',
    },
    background: {
      paper: '#fffddd',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Poppins', 'san-serif'].join(','),
    h1: {
      fontSize: '22px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 300,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '7px',
          },
          '.MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '7px 15px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiSelect-root': {
            borderRadius: '7px',
          },
          '& .MuiSelect-select': {
            padding: '7px 15px',
          },
        },
      },
    },
  },
});
