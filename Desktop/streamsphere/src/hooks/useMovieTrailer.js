import { useDispatch, useSelector } from "react-redux";
import { setAddTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";



const useMovieTrailer = (movieId) =>{
    const dispatch= useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async () =>{
      const response = await fetch(`https://summer-mouse-99b5.nakusharma29.workers.dev/api/movie/${movieId}/videos?language=en-US`);
      const json = await response.json();
      const filteredData  = json.results.filter(video => video.type === "Trailer");
    
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      
      dispatch(setAddTrailerVideo(trailer));
     
        
    }
    useEffect(()=>{
       !trailerVideo &&  getMovieVideos();
    },[])
}
export default useMovieTrailer;