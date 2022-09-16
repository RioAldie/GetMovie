import { Box } from '@mui/material';
import React from 'react';
import Movies from '../movies';
import BySearch from '../movies/bysearch';

const SearchBody = () => {
  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <BySearch />
      </Box>
    </main>
  );
};

export default SearchBody;
