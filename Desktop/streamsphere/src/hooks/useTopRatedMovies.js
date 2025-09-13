import { useDispatch, useSelector } from 'react-redux';
import { setTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  
    const getTopRatedMovies = async () => {
      try {
        
        const response = await fetch(
          'https://summer-mouse-99b5.nakusharma29.workers.dev/api/movie/top_rated?language=en-US&page=1'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
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