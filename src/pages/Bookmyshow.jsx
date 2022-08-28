import { Link, Outlet } from "react-router-dom";
import "./book.css"
function Bookmyshow() {
    return ( 
      <>
        <h1 id="cho">CHOOSE THE PLACE</h1>
        <div id="place">
        <Link id="imax" to="imax">IMAX</Link>
        <Link id="pvr" to="pvr">PVR</Link>
        </div>
    <Outlet/>
        </>
     );
}

export default Bookmyshow;