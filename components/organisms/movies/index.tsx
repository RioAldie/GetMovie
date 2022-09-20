import { Container, Grid, Typography } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MovieCtx } from '../../../services/context/MovieContext';
import { MovieTypes } from '../../../services/data-types';
import {
  GetMovieByGenreDB,
  GetPopularMoviesDB,
  GetUpcomingMovieDB,
} from '../../../services/movie';
import MovieItem from '../../moleculs/Movieitem';
import Loading from '../../utilities/loading';
import Action from './action';
import Animation from './animation';
import Comedy from './comedy';
import Drama from './drama';
import Horror from './horror';
import Popular from './popular';
import Romance from './romance';
import Upcoming from './upcoming';

const Movies = () => {
  const { action } = useContext(MovieCtx);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   const handleMovies = () => {
  //     if (action === 'action') {
  //       return <Action />;
  //     }
  //     if (action === 'animation') {
  //       return <Animation />;
  //     }
  //     if (action === 'popular') {
  //       return <Popular />;
  //     }
  //     if (action === 'comedy') {
  //       return <Comedy />;
  //     }
  //     if (action === 'drama') {
  //       return <Drama />;
  //     }
  //     if (action === 'romance') {
  //       return <Romance />;
  //     }
  //     if (action === 'horror') {
  //       return <Horror />;
  //     }
  //     if (action === 'upcoming') {
  //       return <Upcoming />;
  //     }
  //   };

  const getActionMovieList = useCallback(
    async (genre: string) => {
      if (genre === 'action') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('28')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'popular') {
        setIsLoading(true);
        const data = await GetPopularMoviesDB()
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'horror') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('27')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'romance') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('10749')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'animation') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('16')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'comedy') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('35')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'drama') {
        setIsLoading(true);
        const data = await GetMovieByGenreDB('18')
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
      if (genre === 'upcoming') {
        setIsLoading(true);
        const data = await GetUpcomingMovieDB()
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
        return setMovies(data);
      }
    },
    [GetMovieByGenreDB]
  );

  useEffect(() => {
    console.log(action);
    let isChange = false;
    if (isChange === false) {
      getActionMovieList(action);
      return () => {
        isChange = true;
      };
    }
  }, [action]);
  return (
    <>
      <Container
        sx={{ width: '100%', py: 8 }}
        maxWidth="md"
        id="movies"
      >
        <Typography variant="h5" color={'primary'} sx={{ mb: 10 }}>
          {action} movies
        </Typography>
        {isLoading ? <Loading /> : null}
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
};

export default Movies;
