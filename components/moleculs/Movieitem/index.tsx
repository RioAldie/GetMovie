import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Grid,
  styled,
  Typography,
} from '@mui/material';
import IconButton, {
  IconButtonProps,
} from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import {
  MovieTypes,
  PosterTypes,
} from '../../../services/data-types';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ExpandMoreProps extends IconButtonProps {
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

const MovieItem = (props: MovieTypes) => {
  const [expanded, setExpanded] = useState(false);
  const {
    adult,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
    genre,
  } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardHeader
            action={
              <Typography variant="h6" color="primary"></Typography>
            }
            title={`${title}`}
            subheader={`${release_date}`}
            sx={{ fontSize: '16px' }}
          />
          <CardMedia
            component="img"
            sx={{ height: '600px' }}
            image={`http://image.tmdb.org/t/p/w500${poster_path}`}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body1" color="primary">
              {original_title}
            </Typography>
            <Typography
              variant="body1"
              color="yellow"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Rating : {vote_average}
              <StarIcon fontSize="small" />
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Views : {popularity}
              <VisibilityIcon fontSize="small" />
            </Typography>
            <Typography variant="body2" color="text.primary">
              Language : {original_language}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Release Date : {release_date}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default MovieItem;
