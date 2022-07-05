import { Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { MovieCtx } from "../../../services/context/MovieContext";

export default function Sidebar(){
    const { action, setAction } = useContext(MovieCtx);

    return(
        <>
        <Box sx={{backgroundColor: 'background.paper'}} >
            <Stack direction="row" spacing={2} sx={{backgroundColor: 'background.paper',ml:'10px',display:{xs:'none', md:'flex'},alignItems:'center',justifyContent:'center'}} >
                <Button onClick={() => setAction('action')} href="#movies" size="small">Action</Button>
                <Button onClick={() => setAction('popular')} href="#movies" size="small">Popular</Button>
                <Button onClick={() => setAction('drama')} href="#movies" size="small">Drama</Button>
                <Button onClick={() => setAction('comedy')} href="#movies" size="small">Comedy</Button>
                <Button onClick={() => setAction('romance')} href="#movies" size="small">Romance</Button>
                <Button onClick={() => setAction('horror')} href="#movies" size="small">Horror</Button>
                <Button onClick={() => setAction('animation')} href="#movies" size="small">Animation</Button>
                <Button href="#movies" size="small">Terbaru</Button>
            </Stack>
        </Box>
            
        </>
    )
}