import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies?.nowPlayingMovies) {
    return <div>Loading...</div>; // Early return, shows loading state
  }
  return movies.nowPlayingMovies && (
    <div className='bg-black '>
    <div className='mt-0 md:-mt-40   pl-5 relative z-20 '>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies ={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies ={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies ={movies.upcomingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer