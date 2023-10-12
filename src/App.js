
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import TvShow from './Pages/TvShow';
import SignupPage from './Pages/SignupPage';
import MoviePage from './Pages/MoviePage'
import Netflix from './Pages/Netflix';
import Player from './Pages/Player';


function App() {
  return (
 <BrowserRouter>
     <Routes>      
      <Route exact path='/signup' element={<SignupPage/>}/> 
      <Route exact path='/movie' element={<MoviePage/>}/>  
      <Route exact path='/tv' element={<TvShow/>}/> 
      <Route exact path='/login' element={<LoginPage/>}/> 
      <Route exact path='/' element={<Netflix/>}/> 
      <Route exact path='/player' element={<Player/>}/> 
    
   </Routes>
   {/* <Header/> */}

 </BrowserRouter> 

    
  );
}

export default App;
