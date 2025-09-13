import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  
    const getUpcomingMovies = async () => {
      try {
        
        const response = await fetch(
          'https://summer-mouse-99b5.nakusharma29.workers.dev/api/movie/upcoming?language=en-US&page=1'
          
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
     !upcomingMovies &&  getUpcomingMovies();
    }, []);
  };
  
export default useUpcomingMovies;