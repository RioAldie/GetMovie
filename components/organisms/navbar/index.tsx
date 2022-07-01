import { AppBar, Toolbar, Typography } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export default function Navbar(){
    return(<>
        <AppBar position="relative">
        <Toolbar>
          <TheaterComedyIcon/>
          <Typography variant="h6" color="inherit" noWrap>
            Getmovie
          </Typography>
        </Toolbar>
      </AppBar>
        </>)
}