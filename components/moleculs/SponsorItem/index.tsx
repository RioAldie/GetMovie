import { Box } from "@mui/material";
import Image from "next/image";

interface SponsorItemProps{
    image: string,
    height: number
}
export default function SponsorItem (props: SponsorItemProps){
    const {image,height} = props;
    return(
        <>
            <Box>
                <Image src={`/image/${image}`} width={150} height={height}/>
            </Box>
        </>
    )
}