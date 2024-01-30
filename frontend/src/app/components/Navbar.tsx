import React from 'react';
import { Stack, AppBar, Box, Typography, Toolbar } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{boxShadow: 'none'}}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '74px',
        }}>
        <Box sx={{ position: 'relative', width: 50, height: 55, cursor: 'pointer' }}>
          <Image
            src="/resources/Logo.png"
            alt="logo"
            fill
            sizes="100%"  
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="/resources/Logo.png"
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Image
              src="/resources/Notifications.png"
              alt="noti-bell"
              width={22}
              height={22}
              loading="eager"
              blurDataURL="/resources/Notifications.png"
            />
            <Image
              src="/resources/userImage.png"
              alt="user_profile"
              width={45}
              height={45}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="/resources/userImage.png"
            />
            <Stack direction="column" sx={{ color: '#fff' }}>
              <Typography variant="subtitle1">Lisa</Typography>
              <Typography variant="body1">Operator</Typography>
            </Stack>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
