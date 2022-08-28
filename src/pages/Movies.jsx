
import React from "react";
import "./movies.css"
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
const Movies = () => {

    let{id}= useParams()
    let navigate=useNavigate()
    let{data:movie,pending,error}=useFetch(`http://localhost:4000/movies/${id}`)
    
    return (
        <div className="movie-detail">
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading....!!!!</h1>}
        {movie && <div id="details">
            <div>
            <h2> {movie.mName} Details</h2>
            <br />

            <img src={movie.Poster}></img> 
            </div>
            <div className="det"><h1>Movie :{movie.mName}</h1>
            <h5>Actor :{movie.hero}</h5>
            <h5>Genere :{movie.genere}</h5>
            <h5>Story :{movie.story}</h5></div>
            
               {/* <iframe width="560" height="315" src={movie.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/} </div> } 
             <button><Link id="book" to="/bookmyshow">Book Tickets</Link></button>
        </div>
      );
}
 
export default Movies;