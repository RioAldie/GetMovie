import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';
import { MovieCtx } from '../../../services/context/MovieContext';

export default function Sidebar() {
  const { action, setAction } = useContext(MovieCtx);
  const genres = [
    'action',
    'animation',
    'comedy',
    'drama',
    'horror',
    'popular',
    'romance',
    'upcoming',
  ];

  return (
    <>
      <Box sx={{ backgroundColor: 'background.paper' }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: 'background.paper',
            ml: '10px',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {genres.map((genre, i) => {
            return (
              <Link href="/#movies" key={i}>
                <a>
                  <Button
                    onClick={() => setAction(genre)}
                    size="small"
                  >
                    {genre}
                  </Button>
                </a>
              </Link>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}
