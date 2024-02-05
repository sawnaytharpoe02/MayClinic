import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'May Clinic',
  description: 'May Clinic - Medical Clinic Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
