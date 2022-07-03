import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, CardHeader, styled } from '@mui/material';
import MovieItem from '../../moleculs/Movieitem';
import Image from 'next/image';
import Footer from '../footer';
import Sponsor from '../sponsor';
import { GetHDQualityMovie, GetLastedMovie, GetPopularMovies } from '../../../services/movie';
import { MovieTypes } from '../../../services/data-types';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
interface ExpandMoreProps extends IconButtonProps  {
    expand: boolean;
  }
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Body() {
    const [poster,setPoster] = React.useState([]);
    const getPopularMovieList = React.useCallback( async ()=>{
      const data = await GetPopularMovies();
      setPoster(data);
    },[GetPopularMovies]);
  
    React.useEffect(()=>{
      getPopularMovieList();
    },[])
  return (
    
  <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Box>
                <Image src={'/image/movie-thum.png'} width={800} height={488}/>
            </Box>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Get Movie Favoritmu Sekarang Juga
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Getmovie membantu kamu menemukan movie terbaru maupun movie classic terpopuler pada masanya, tidak hanya lokal tetapi juga movie mancanegara.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Movie Terbaru</Button>
              <Button variant="outlined">List Movie</Button>
            </Stack>
          </Container>
          <Sponsor/>
        </Box>
        <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
            <Container sx={{ width:'100%', py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {poster.map((item: MovieTypes) =>(
                        <MovieItem 
                        key={item.downloadLink} 
                        name={item.options.name} 
                        image={item.poster}
                        date={item.options.dateCreated}
                        genre={item.options.genre}
                        category= {item.categories}
                        rating={item.rating}
                        downloadLink={item.downloadLink}
                        quality={item.quality}
                        datePublished={item.options.datePublished}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
        
      </main>  
    <Footer/>
    </>
  );
}