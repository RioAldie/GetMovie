import { useContext, useEffect } from "react";
import { MovieCtx } from "../../../services/context/MovieContext";
import Action from "./action";
import Animation from "./animation";

const Movies = () =>{
    const {action} = useContext(MovieCtx);
    const handleMovies = () =>{
        if(action === 'action'){
            return <Action/>
        }
        if(action === 'animation'){
            return <Animation/>
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