import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (
    <div className=''>
         <Header/>
        {
           showGptSearch ? <GptSearch/> :
           <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
         </>   
        } 
        
        
      
    </div>
   
    
  );
}

export default Browser