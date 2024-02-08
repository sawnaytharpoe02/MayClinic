'use client';

import React from 'react';
import { Button, styled } from '@mui/material';

const CommonFormBtn = (props: any) => {
  const CustomButton = styled(Button)({
    boxShadow: 'none',
    width: '140px',
    textTransform: 'none',
    fontSize: 14,
    padding: '4px 25px',
    borderRadius: '0.3rem',
  });

  return (
    <CustomButton {...props} disableElevation>
      {props.children}
    </CustomButton>
  );
};

export default CommonFormBtn;
