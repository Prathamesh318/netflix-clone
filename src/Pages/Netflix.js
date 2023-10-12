import React,{useState,useEffect
} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TopNav from '../component/TopNav';
import styled from 'styled-components';
// import { AiOutlineInfoCircle } from 'react-icons/ai';
// import{FaPlay} from 'react-icons/fa'
import Card from '../component/card';
import { getGenres,fetchMovies } from '../store';
import SliderContainer from '../component/SliderContainer';




const Netflix = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const navigate=useNavigate();
  const movies=useSelector((state)=>state.netflix.movies); 
  const generesLoaded=useSelector((state)=>state.netflix.generesLoaded);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  
  }, []);
  useEffect(() => {
    if(generesLoaded){
      dispatch(fetchMovies({type:"all"}))
    }
  
  });
  

  window.onscroll=()=>{
    setisScrolled(window.pageYOffset===0 ? false:true)
    return ()=>{window.onscroll=null};
  }
  // console.log(movies);
  return (
    <HeroContainer>

    <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
      <img className="img1"src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt='HeroImage'/>
      <div className='container'>
        <div className='title'>
          <h1>Avenger: Age Of ultron</h1>
          <p>Superman was born on the fictional planet Krypton with the birth name of Kal-El. As a baby, his parents sent him to Earth in a small spaceship shortly before Krypton was destroyed in a natural cataclysm. 
          </p>
        </div>
        <div className='buttons'>
          <button onClick={()=>navigate('/player')}className='playBtn'>Play</button>
          <button className='moreBtn'>More</button>           
        </div>
      </div>
  
    </div>
   <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}
const HeroContainer=styled.div`
  
    .hero{
      position: relative;
      /* .bac e{

      } */
      .img1{
        filter: brightness(40%);
        height: 70vh;
        width: 100%;
      }
      .container{
        position: absolute;
        bottom:1rem;
        .title{
          h1{
            margin-left: 5rem;
            text-transform: uppercase;
            font-size: 53px;
            background: -webkit-linear-gradient(#eee,rgb(128,13,13));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p{
            margin-bottom: -50px;
            width: 640px;
            margin-left: 5rem;
            font-family:"lexend Deca",sans-serif ;
            color: white;
          }
        }
        .buttons{
          display: flex;
          margin: 5rem;
          gap: 2rem;
        }
        .playBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: red;
            border-radius: 1rem;
            font-size: 1.4rem;
            gap: 1rem;
            padding: 0.9rem;
            padding-left: 2rem;
            padding-right: 2.4rem;
            border:none;        
            cursor: pointer;
          }
        .moreBtn{
          display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: black;
            border-radius: 1rem;
            font-size: 1.4rem;
            gap: 1rem;
            padding: 0.9rem;
            padding-left: 2rem;
            padding-right: 2.4rem;
            border:0.1REM SOLID white;        
            cursor: pointer;
        }
      }
    }
`

export default Netflix