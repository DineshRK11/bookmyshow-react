
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Allmovies from './pages/Allmovies';
import Aveng from './pages/aveng';
import Bookmyshow from './pages/Bookmyshow';
import Drive from './pages/Drive';
import Home from './pages/Home';
import IMAX from './pages/IMAX';
import Movies from './pages/Movies';
import Navbar from './pages/Navbar';
import PVR from './pages/PVR';
import Userlogin from './pages/Userlogin';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/movies:id' element={<Movies/>}/>
   <Route path='/allmovies' element={<Allmovies/>}/>
   <Route path='/bookmyshow' element={<Bookmyshow/>}>
   <Route path='pvr' element={<PVR/>}/>
    <Route path='imax' element={<IMAX/>}/>
   </Route>
   <Route path='users' element={<Users/>}/>
   <Route path='/drive' element={<Drive/>}/>
   <Route path='/login' element={<Userlogin/>}/>
   <Route path="/allmovies/:index" element={<Aveng/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
