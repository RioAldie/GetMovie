import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Grid, styled, Typography } from "@mui/material";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { MovieTypes } from "../../../services/data-types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

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
interface MovieItemProps{
    image: string,
    name: string,
    date: string,
    genre: string,
    category: string,
    rating: string,
    downloadLink: string,
    quality: string,
    datePublished: string
}
const MovieItem = (props: MovieItemProps) =>{
    const [expanded, setExpanded] = useState(false);
    const {image,name,date,genre,category,rating,downloadLink,quality,datePublished} = props;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(()=>{
        console.log(image);
    },[])
    return(
    <>
        <Grid item  xs={12} sm={6} md={6} >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader
                action={
                  <Typography variant="h6" color="primary">
                    {quality}
                  </Typography>
                }
                title={`${name}`}
                subheader={`${date}`}
                sx={{fontSize: '16px'}}
              />
              <CardMedia
                component="img"
                sx={{height:'500px'}}
                image={`${image}`}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" color="primary">
                  Genre : {genre}
                </Typography>
                <Typography variant="body2" color="yellow">
                  Rating : {rating}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  Category : {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Subtitle : English,Indonesia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Publised : {datePublished}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
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
                  <Typography paragraph>Download:</Typography>
                  <Typography paragraph sx={{color:'cyan',fontStyle:'italic',cursor:'pointer'}}>
                    {downloadLink}
                  </Typography>
                  <a href={`${downloadLink}`} target="_blank">
                    <Button variant="contained">Download</Button>
                  </a>
                </CardContent>
              </Collapse>
              </Card>
              </Grid>
    </>
    )
}

export default MovieItem;