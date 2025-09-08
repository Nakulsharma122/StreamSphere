import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title , movies}) => {
  if (!movies) {
    return null; 
  }
  return (
    
      <div className='px-2 text-white'>
        <h1 className='text-2xl md:text-3xl py-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide no-scrollbar'>
          <div className='flex'>
              {movies?.map((movie)=>(
<MovieCard key ={movie.id} posterPath = {movie.poster_path} ></MovieCard>
              ))}
              
          </div>
        </div>
      </div>
  )
}

export default MovieList