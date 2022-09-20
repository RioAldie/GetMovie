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
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
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
  const [isSearch, setIsSearch] = useState(false);
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
            alignItems: 'center',
          }}
        >
          <Image
            src={'/image/gmovie-logo.png'}
            height={30}
            width={67}
          />
          <Box
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            <SearchMovie />
          </Box>

          <Box
            sx={{
              display: { sm: 'block', md: 'none' },
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={(e) => setIsSearch(true)}
            >
              <SearchIcon />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={isSearch}
              onClose={(e) => setIsSearch(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <SearchMovie />
            </Menu>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={(e) => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
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
