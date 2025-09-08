import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try {
      
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        api_options
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