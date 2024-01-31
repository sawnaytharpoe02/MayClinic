'use client';

import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import Image from 'next/image';


const AddPatientBtn = (props: any) => {
  const CustomButton = styled(Button)({
    boxShadow: 'none',
    width: '100%',
    textTransform: 'none',
    fontSize: 14,
    padding: '5px 30px',
    borderRadius: '0.6rem',
  });

  return (
    <CustomButton {...props} variant="contained" disableElevation>
      <Image src="/resources/add.png" alt='add icon' width={12} height={12}/>
      <Typography ml={1} color='#fff'>{props.children}</Typography>
    </CustomButton>
  );
};

export default AddPatientBtn;
