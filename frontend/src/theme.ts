'use client';

import { BorderColor } from '@mui/icons-material';
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
          '.MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '4px 15px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#54bab9',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiSelect-select': {
            padding: '4px 15px',
            BorderColor: '#54bab9',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#54bab9',
          },
        },
      },
    },
  },
});
