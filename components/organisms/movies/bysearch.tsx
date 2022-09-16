import { Container, Grid, Typography } from '@mui/material';
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { QueryCtx } from '../../../services/context/QueryContext';
import { MovieTypes } from '../../../services/data-types';
import {
  GetMovieByGenreDB,
  GetMovieBySearch,
} from '../../../services/movie';
import MovieItem from '../../moleculs/Movieitem';

export default function BySearch() {
  const [movies, setMovies] = useState([]);
  const { query } = useContext(QueryCtx);
  const getMovieListBySearchQuery = useCallback(
    async (query: string) => {
      const data = await GetMovieBySearch(query);
      setMovies(data.results);
    },
    []
  );

  useEffect(() => {
    console.log(query);
    getMovieListBySearchQuery(query);
  }, [query]);
  return (
    <>
      <Container
        sx={{ width: '100%', py: 8 }}
        maxWidth="md"
        id="movies"
      >
        <Typography variant="h5" color={'primary'} sx={{ mb: 10 }}>
          Search / {query}
        </Typography>
        <Grid container spacing={4}>
          {movies.map((item: MovieTypes) => (
            <MovieItem
              key={item.id}
              adult={item.adult}
              id={item.id}
              original_language={item.original_language}
              original_title={item.original_title}
              overview={item.overview}
              popularity={item.popularity}
              poster_path={item.poster_path}
              release_date={item.release_date}
              title={item.title}
              vote_average={item.vote_average}
              genre={item.genre}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
