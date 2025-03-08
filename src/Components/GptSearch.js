import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    

    <div className='bg-green-300 w-full'>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestion></GptMovieSuggestion>
    </div>
    
  )
}

export default GptSearch;