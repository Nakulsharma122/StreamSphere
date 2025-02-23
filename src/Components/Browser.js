import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

const Browser = () => {
    useNowPlayingMovies();
  return (
    <div className=''>
         <div><Header/></div>
         <MainContainer></MainContainer>
         <SecondaryContainer></SecondaryContainer>
    </div>
   
    
  );
}

export default Browser