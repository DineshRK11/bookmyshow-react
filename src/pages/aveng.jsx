import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function Aveng() {
     let {index}=useParams();

    let{data:movie,pending,error}=useFetch(`https://www.omdbapi.com/?s=avengers&apikey=32ae5060`)
    return ( 
       <>
        {pending && <h1>Loading....</h1>}
        {error && <h2>{error}</h2>}
        {movie && <div>
            <h1>{movie.Search[index].Title}</h1>
            <h4>IMDB ID:{movie.Search[index].imdbID}</h4>
            <img src={movie.Search[index].Poster} alt="" />
            <h3>Release Year:{movie.Search[index].Year}</h3>
            
            </div>}
        </>
     );
}

export default Aveng;
