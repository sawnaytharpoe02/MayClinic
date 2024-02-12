'use client';

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import CommonFormBtn from '../button/CommonFormBtn';

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  title,
  content,
  handleDeleteProcess,
}: {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: string;
  handleDeleteProcess: () => void;
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <DialogTitle sx={{ py: 2, fontSize: '18px' }}>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ m: '10px 10px 0 auto', display: 'flex' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ pt: 0 }}>
        <DialogContentText sx={{ textAlign: 'center' }}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 4 }}>
        <CommonFormBtn
          onClick={() => {
            handleDeleteProcess();
            handleClose();
          }}
          variant="contained"
          color="error">
          <Typography color="#fff">Delete</Typography>
        </CommonFormBtn>
        <CommonFormBtn onClick={handleClose} variant="outlined">
          <Typography color="#000">Cancel</Typography>
        </CommonFormBtn>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
