import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null ;
   // console.log("this"+posterPath);
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img className='w-38' alt="Movie Card"src={IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard