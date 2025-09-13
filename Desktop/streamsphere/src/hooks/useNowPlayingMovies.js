import { useDispatch, useSelector } from 'react-redux';
import { setNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try {
      
      const response = await fetch(

        'https://summer-mouse-99b5.nakusharma29.workers.dev/api/movie/now_playing?language=en-US&page=1'
        
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(setNowPlayingMovies(data.results));
    } catch (error) {
      console.error('Error fetching now-playing movies:', error);
      
    }
  };


  useEffect(() => {
     if (!nowPlayingMovies)  getNowPlayingMovies();
  }, []);  
};

export default useNowPlayingMovies;