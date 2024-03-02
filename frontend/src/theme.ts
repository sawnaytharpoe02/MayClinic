"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#54BAB9",
    },
    secondary: {
      main: "#EDC339",
    },
    error: {
      main: "#CD211D",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Poppins", "san-serif"].join(","),
    h1: {
      fontSize: "22px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 300,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "6px 8px",
          borderRadius: "20px",
          fontSize: "13px",
        },
        notchedOutline: {
          borderColor: "#54bab9",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#54bab9",
        },
      },
    },
  },
});

export { theme };
