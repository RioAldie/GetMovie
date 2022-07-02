import { Box } from "@mui/material";
import SponsorItem from "../../moleculs/SponsorItem";

export default function Sponsor(){
    return(
        <>
            <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly',mt:'80px',flexWrap:'wrap'}}>
                <SponsorItem image={"warner-bros-logo.png"} height={78} />
                <SponsorItem image={"avengers-logo.png"} height={50} />
                <SponsorItem image={"logo-disney-channel.png"} height={50} />
                <SponsorItem image={"netflix-logo.png"} height={50} />
            </Box>
        </>
    )
}