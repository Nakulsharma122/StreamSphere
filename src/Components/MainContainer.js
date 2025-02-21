import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies); //  optional Chaining if not found return undefined .
if (!movies) return;
const mainMovie = movies[0];
console.log(mainMovie);
  return (
    <div>
        <VideoTitle></VideoTitle>
        <VideoBackground></VideoBackground>
    </div>
  )
}

export default MainContainer