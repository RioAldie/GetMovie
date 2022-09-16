import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Image from 'next/image';
import Sidebar from '../sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { MovieCtx } from '../../../services/context/MovieContext';
import SearchMovie from '../search';
import Link from 'next/link';

const ButtonStyled = styled(Button)({
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '400',
  color: 'black',
  height: '32px',
});
export default function Navbar() {
  const [open, setOpen] = useState(false);
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
      <AppBar position="sticky" sx={{ backgroundColor: '#100F0F' }}>
        <Toolbar
          sx={{
            backgroundColor: '#100F0F',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src={'/image/gmovie-logo.png'}
            height={30}
            width={67}
          />
          <SearchMovie />
          <Box
            sx={{
              display: { sm: 'block', md: 'none' },
              alignItems: 'center',
            }}
          >
            <MenuIcon onClick={(e) => setOpen(true)} />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
            </Menu>
          </Box>
        </Toolbar>
        <Sidebar />
      </AppBar>
    </>
  );
}
