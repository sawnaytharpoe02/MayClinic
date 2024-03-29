import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ThemeProvider from '@/ThemeProvider';
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
