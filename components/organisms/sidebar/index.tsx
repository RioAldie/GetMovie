import { Box, Button, Stack } from "@mui/material";

export default function Sidebar(){
    return(
        <>
        <Box sx={{backgroundColor: 'background.paper'}} >
            <Stack direction="row" spacing={2} sx={{backgroundColor: 'background.paper',ml:'10px',display:{xs:'none', md:'flex'},alignItems:'center',justifyContent:'center'}} >
                <Button>Action</Button>
                <Button>Popular</Button>
                <Button>Drama</Button>
                <Button>Comedy</Button>
                <Button>Thriller</Button>
                <Button>Animation</Button>
                <Button>Terbaru</Button>
            </Stack>
        </Box>
            
        </>
    )
}