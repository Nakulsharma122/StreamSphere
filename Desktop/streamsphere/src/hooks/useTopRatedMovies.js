import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  
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
      !topRatedMovies && getTopRatedMovies();
    }, []);
  };
  
export default useTopRatedMovies;