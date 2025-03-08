import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieResults , movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null ;
  return (
    <div className='p-4  text-black bg-opacity-90'>
      <div>
        {
          movieNames.map((movieName,index) =>(
            <MovieList key = {movieName} title = {movieName} movies={movieResults[index]}></MovieList>
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion