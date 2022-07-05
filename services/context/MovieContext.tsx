import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { GetPopularMovies } from "../movie";


interface MovieProps{
    children: React.ReactNode
}
type MovieContextValue={
    action: string,
    setAction: React.Dispatch<React.SetStateAction<string>>
}
const MovieCtxdeafultvalue:MovieContextValue = {
    action: 'popular',
    setAction: state => {}
}
export const MovieCtx = createContext(MovieCtxdeafultvalue);
export default function MovieCtxProvider( {children}:MovieProps){
    const [action, setAction] = useState(MovieCtxdeafultvalue.action);

    
    return(
        <>
            <MovieCtx.Provider value={{action, setAction}}>
                {children}
            </MovieCtx.Provider>
        </>
    )
}