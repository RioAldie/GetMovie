import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieTypes } from "../../../services/data-types";
import { GetMovieByGenreDB } from "../../../services/movie";
import MovieItem from "../../moleculs/Movieitem";

export default function Comedy(){
    const [movies, setMovies] = useState([]);
    const getComedyMovieList = React.useCallback( async ()=>{
        const data = await GetMovieByGenreDB('35');
        setMovies(data);
        console.log('movie=>',data)
      },[GetMovieByGenreDB]);

      useEffect(()=>{
        getComedyMovieList();
      },[])
    return(
        <>
            <Container sx={{ width:'100%', py: 8 }} maxWidth="md">
             <Typography variant='h5' color={'primary'} sx={{mb: 10}}>
                Comedy Movies
            </Typography>
              <Grid container spacing={4}>
                {
                  movies.map((item: MovieTypes)=>(
                    <MovieItem key={item.id} adult={item.adult} id={item.id} original_language={item.original_language} original_title={item.original_title} overview={item.overview} popularity={item.popularity} poster_path={item.poster_path} release_date={item.release_date} title={item.title} vote_average={item.vote_average} genre={item.genre}/>
                  ))
                }
              </Grid>
            </Container>
        </>
    )
}