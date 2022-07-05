import { AppBar, Box, Button, Menu, MenuItem, Stack, styled, Toolbar, Typography } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Image from "next/image";
import Sidebar from "../sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from "react";
import { MovieCtx } from "../../../services/context/MovieContext";

const ButtonStyled = styled(Button)({
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '400',
    color:'black',
    height: '32px'
})
export default function Navbar(){
    const [open, setOpen] = useState(false);
    const { action, setAction } = useContext(MovieCtx);
    return(<>
        <AppBar position="sticky" sx={{backgroundColor:'#100F0F'}}>
        <Toolbar sx={{backgroundColor:'#100F0F',display:'flex',justifyContent:'space-between'}}>
          <Image src={"/image/gmovie-logo.png"} height={30} width={67}/>
          <Box sx={{display:'flex', alignItems:'center'}}>
          <MenuIcon sx={{display:{ sm:'block', md:'none'}}} onClick={(e) =>setOpen(true)}/>
             <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e)=> setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >

                <Button onClick={() => setAction('action')} href="#movies" size="small">Action</Button>
                <Button onClick={() => setAction('popular')} href="#movies" size="small">Popular</Button>
                <Button onClick={() => setAction('drama')} href="#movies" size="small">Drama</Button>
                <Button onClick={() => setAction('comedy')} href="#movies" size="small">Comedy</Button>
                <Button onClick={() => setAction('romance')} href="#movies" size="small">Romance</Button>
                <Button onClick={() => setAction('horror')} href="#movies" size="small">Horror</Button>
                <Button onClick={() => setAction('animation')} href="#movies" size="small">Animation</Button>
                <Button href="#movies" size="small">Terbaru</Button>
                </Menu>
          </Box>
         
        </Toolbar>
        <Sidebar/>
      </AppBar>
        </>)
}