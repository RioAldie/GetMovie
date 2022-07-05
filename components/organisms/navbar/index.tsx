import { AppBar, Box, Button, styled, Toolbar, Typography } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Image from "next/image";
import Sidebar from "../sidebar";
import MenuIcon from '@mui/icons-material/Menu';

const ButtonStyled = styled(Button)({
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '400',
    color:'black',
    height: '32px'
})
export default function Navbar(){
    return(<>
        <AppBar position="sticky" sx={{backgroundColor:'#100F0F'}}>
        <Toolbar sx={{backgroundColor:'#100F0F',display:'flex',justifyContent:'space-between'}}>
          <Image src={"/image/gmovie-logo.png"} height={30} width={67}/>
          <Box sx={{display:'flex', alignItems:'center'}}>
             <MenuIcon color="primary" sx={{display:{sm: 'block', md: 'none'}}}/>
          </Box>
         
        </Toolbar>
        <Sidebar/>
      </AppBar>
        </>)
}