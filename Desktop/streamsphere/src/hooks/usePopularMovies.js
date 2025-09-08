import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
  
    const getPopularMovies = async () => {
      try {
        
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          api_options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setPopularMovies(data.results));
      } catch (error) {
        console.error('Error fetching now-playing movies:', error);
        
      }
    };
  
  
    useEffect(() => {
    !popularMovies &&   getPopularMovies();
    }, []);
  };
  
export default usePopularMovies;