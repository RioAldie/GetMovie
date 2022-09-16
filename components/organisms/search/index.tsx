import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Box, Button, InputBase, styled } from '@mui/material';
import { GetMovieBySearch } from '../../../services/movie';
import { QueryCtx } from '../../../services/context/QueryContext';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const SearchMovie = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { query, setQuery } = useContext(QueryCtx);
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (value: any) => {
    setIsSearch(true);
    setSearchValue(value);
  };
  const sendQuery = () => {
    setQuery(searchValue);
  };

  return (
    <Box
      sx={{
        width: '400px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Search>
        <SearchIconWrapper onClick={(e) => console.log('klik')}>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Search>
      {isSearch ? (
        <Link href={'/search'}>
          <Button onClick={(e) => sendQuery()}>
            <SearchIcon />
          </Button>
        </Link>
      ) : null}
    </Box>
  );
};

export default SearchMovie;
