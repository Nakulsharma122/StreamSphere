import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../utils/constants";
import { setAddTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";



const useMovieTrailer = (movieId) =>{
    const dispatch= useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', api_options);
      const json = await data.json();
      const filteredData  = json.results.filter(video => video.type === "Trailer");
    
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      
      dispatch(setAddTrailerVideo(trailer));
     
        
    }
    useEffect(()=>{
       !trailerVideo &&  getMovieVideos();
    },[])
}
export default useMovieTrailer;