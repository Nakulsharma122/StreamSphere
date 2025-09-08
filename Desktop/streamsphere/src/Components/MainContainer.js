import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies); //  optional Chaining if not found return undefined .
if (!movies) return;
const mainMovie = movies[0];

const {original_title, overview,id} = mainMovie;
  return (
    <div className='pt-[40%] md:pt-0'>
        <VideoTitle title = {original_title} overview = {overview}></VideoTitle>
        <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer