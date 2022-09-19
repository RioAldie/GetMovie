import { Copyright } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box
        sx={{ bgcolor: 'background.paper', p: 6 }}
        component="footer"
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          color="text.primary"
        >
          @rioaldie <Copyright sx={{ color: '#c4c4c4' }} /> 2022
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All Reserved
        </Typography>
      </Box>
    </>
  );
}
