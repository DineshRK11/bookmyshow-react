
import "./allmov.css"
import useFetch from './useFetch.js';
const Drive = () => {

    
  let {data : movies,pending,err}=useFetch(`https://www.omdbapi.com/?s=drive&apikey=32ae5060`,
  {method:"GET"});
    return (
        
        <div className="divmov">
            
            {pending && <h1>Loading....!!!!</h1>}
        {movies && movies.Search.map((mov,ind)=>(

            <div className="divsec" key={mov.Poster} >
                
                <img id="aveng" src={mov.Poster} alt="" />
                <h6>{mov.Title}</h6>

            </div>
            )
        )}
            {err && <h1>{err}</h1>}
        </div>
     );
}
export default Drive;    