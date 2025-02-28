import { api_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
  
    const getTopRatedMovies = async () => {
      try {
        
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          api_options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setTopRatedMovies(data.results));
      } catch (error) {
        console.error('Error fetching now-playing movies:', error);
        
      }
    };
  
  
    useEffect(() => {
      getTopRatedMovies();
    }, []);
  };
  
export default useTopRatedMovies;