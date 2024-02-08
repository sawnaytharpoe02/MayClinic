'use client';

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CommonDialog = ({
  open,
  title,
  content,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: string;
  children: React.ReactNode;
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ m: '10px 10px 0 auto', display: 'flex' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle sx={{ textAlign: 'center', py: 0, fontSize: '18px' }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: 'center' }}>
          {content}
        </DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
