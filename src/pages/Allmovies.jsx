
import { Link } from "react-router-dom";
import "./allmov.css"
import useFetch from './useFetch.js';
const Allmovies = () => {
  let {data : movies,pending,err}=useFetch(`https://www.omdbapi.com/?s=avengers&apikey=32ae5060`,
  {method:"GET"});
    return (
        
        <div className="divmov">
            
            {pending && <h1>Loading....!!!!</h1>}
        {movies &&
        movies.Search.map((mov,index)=>(
          <div className="divsec" key={index}>
             <Link to={`/allmovies/${index}`}>
                
           <img id="aveng" src={mov.Poster} alt="" />
           <h6>{mov.Title}</h6>
           </Link>
           </div>
          
            )
        )}
        

        {err && <h1>{err}</h1>}
        </div>
       
     );
}
export default Allmovies;     