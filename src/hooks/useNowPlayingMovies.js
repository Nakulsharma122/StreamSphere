import { api_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { nowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';



const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',api_options).catch((error)=>{console.log(error)});
      const json = await data.json().catch((error)=>{console.log(error)});
      console.log(json);
      dispatch(nowPlayingMovies(json.results));
      }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])

}
export default useNowPlayingMovies;