import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

const PatientList = () => {
  return (
    <Box p={2}>
      {/* title */}
      <Typography variant="h1" color="primary">
        Patient List
      </Typography>

      <Grid container mt={2}>
        {/* left side block */}
        <Grid item xs={12} md={6}>
          <Stack sx={{ width: '280px', background: 'red' }} spacing={3}>
            <Box sx={{ border: '1px solid white' }}>
              <div>Search INput</div>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ width: '50%', border: '1px solid white' }}>
                select box one
              </Box>
              <Box sx={{ width: '50%', border: '1px solid white' }}>
                select box two
              </Box>
            </Box>
          </Stack>
        </Grid>

        {/* right side block */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Stack sx={{ width: '220px', background: 'red' }} spacing={3}>
            <Box sx={{ border: '1px solid white' }}>create btn</Box>
            <Box sx={{ border: '1px solid white' }}>paginate</Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientList;
