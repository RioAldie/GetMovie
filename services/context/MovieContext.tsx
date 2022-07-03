import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { GetPopularMovies } from "../movie";


interface MovieProps{
    children: React.ReactNode
}
type MovieContextValue={
    data: [],
    setData: React.Dispatch<React.SetStateAction<[]>>
}
const MovieCtxdeafultvalue:MovieContextValue = {
    data: [],
    setData: state => {}
}
export const MovieCtx = createContext(MovieCtxdeafultvalue);
export default function MovieCtxProvider( {children}:MovieProps){
    const [data, setData] = useState(MovieCtxdeafultvalue.data);
    const [poster,setPoster] = React.useState([]);
    const getPopularMovieList = React.useCallback( async ()=>{
      const poster = await GetPopularMovies();
      setData(poster);
      console.log("data=>",data)
    },[GetPopularMovies]);
  
    React.useEffect(()=>{
      getPopularMovieList();
      
    },[])
    return(
        <>
            <MovieCtx.Provider value={{data: data, setData}}>
                {children}
            </MovieCtx.Provider>
        </>
    )
}