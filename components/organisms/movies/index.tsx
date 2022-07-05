import { useContext, useEffect } from "react";
import { MovieCtx } from "../../../services/context/MovieContext";
import Action from "./action";
import Animation from "./animation";
import Comedy from "./comedy";
import Drama from "./drama";
import Popular from "./popular";
import Romance from "./romance";

const Movies = () =>{
    const {action} = useContext(MovieCtx);
    const handleMovies = () =>{
        if(action === 'action'){
            return <Action/>
        }
        if(action === 'animation'){
            return <Animation/>
        }
        if(action === 'popular'){
            return <Popular/>
        }
        if(action === 'comedy'){
            return <Comedy/>
        }
        if(action === 'drama'){
            return <Drama/>
        }
        if(action === 'romance'){
            return <Romance/>
        }
    }
    // useEffect(()=>{
    //     handleMovies();
    // },[action])
    return (
        <>
            {handleMovies()}
        </>
    )
}

export default Movies;