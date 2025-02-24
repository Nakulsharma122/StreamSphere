import { api_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useUpcomingMovies = () => {
    const dispatch = useDispatch();
  
    const getUpcomingMovies = async () => {
      try {
        
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
          api_options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setUpcomingMovies(data.results));
      } catch (error) {
        console.error('Error fetching now-playing movies:', error);
        
      }
    };
  
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);
  };
  
export default useUpcomingMovies;