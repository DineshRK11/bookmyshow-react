import "./navbar.css"
function Navbar() {
    return ( 
        <div id="navbar">
        <div id="nav1">
            <div id="navsec">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                <input type="search" placeholder="Search for Movies,Events,Sports and Activities"></input>
                </div>
   
                <div id="navsec1">
    <a href="/location">Location</a>
    <button><a href="/login">sign in</a></button>
    <a id="p" href="/menu">Menu</a>
   </div>
    </div>
    <section id="nav2">
        <div id="sec1">
            <ul>
            <li className="li"><a href="/">Home</a></li>
                <li className="li"><a href="/allmovies">Avengers</a></li>
                <li className="li"><a href="/drive">Drive <sup>NEW</sup></a></li>
                <li className="li"><a href="users">Employee</a></li>
                <li className="li"><a href="plays">Plays</a></li>
                <li className="li"><a href="activities">Activities</a></li>
               

                
            </ul>
        </div>
        
    </section>
   
    </div>      
     );
}

export default Navbar;