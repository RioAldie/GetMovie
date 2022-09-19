import { Box, CircularProgress, Modal } from '@mui/material';
import React, { useEffect } from 'react';

const Loading = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Modal>
  );
};

export default Loading;
