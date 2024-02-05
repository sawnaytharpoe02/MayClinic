'use client';

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddPatientForm from '../form/AddPatientForm';

const CommonDialog = ({
  open,
  handleClose,
  title,
  content,
}: {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: string;
}) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ m: '10px 10px 0 auto', display: 'flex' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle sx={{ textAlign: 'center', py: 0 }}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: 'center' }}>
            {content}
          </DialogContentText>
          {/* Form */}
          <AddPatientForm />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', p: 4 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommonDialog;
