import { Link } from "react-router-dom";
import "./home.css"
import useFetch from './useFetch.js';
const Home = () => {
  let {data : movies,pending,err}=useFetch("http://localhost:4000/movies");
   
    return (
        <>
           <div class="d-flex justify-content-center" id="marg">
    
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button id="b1"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active rounded-circle" aria-current="true" aria-label="Slide 1"></button>
          <button id="b2"class="rounded-circle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button id="b3" class="rounded-circle" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button id="b4" class="rounded-circle"type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button id="b5" class="rounded-circle"type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1660202317117_friendshipweb.jpg" class="d-block w-80" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659702309292_bms_web.jpg" class="d-block w-80" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659592071525_rakshabandh.jpg" class="d-block w-80" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1660382150326_qsd.jpg"class="d-block w-80" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659099533221_homepageweb.jpg" class="d-block w-80" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <br />
      </div>
</div>

<div className="div1">
            {pending && <div className='loader'></div>}
            {pending && <h1>Loading....!!!!</h1>}
        {movies && movies.map((mov)=>{
            return(
           
            <div className="div2" key={mov.id}>
                <Link to={`movies${mov.id}`}>
                <img src={mov.Poster} alt="" />
                <h4>{mov.mName}</h4>
                </Link>
            </div>
            )
        })}
        {err && <h1>{err}</h1>}
        </div>
       </>
     );
}
export default Home;     
