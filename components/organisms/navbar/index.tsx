import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Image from "next/image";

const ButtonStyled = styled(Button)({
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '600',
    color:'black',
    height: '36px'
})
export default function Navbar(){
    return(<>
        <AppBar position="relative" sx={{backgroundColor:'#100F0F'}}>
        <Toolbar sx={{backgroundColor:'#100F0F',display:'flex',justifyContent:'space-between'}}>
          <Image src={"/image/gmovie-logo.png"} height={30} width={67}/>
          <ButtonStyled variant="contained">
            <Image src={'/image/magnifying-glass-solid.svg'} height={18} width={18}/>
            <Typography sx={{fontSize: '18px',fontWeight: '600',color:'black',ml:'6px'}}>Seacrh</Typography>
            </ButtonStyled>
        </Toolbar>
      </AppBar>
        </>)
}