import React from 'react'
import Language from '../utils/LanguageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey  = useSelector((store) => store.config.lang); 
  return (
    <div className='pt-[20%] flex justify-center'>
       <form className='w-1/2 bg-black grid grid-cols-12'> 
        <input
        type="text"
        className='p-4 m-4 col-span-9'
        placeholder={Language[langKey].gptSearchHolder} />
        <button className='col-span-3 m-4 py-2 px-4  bg-green-600 text-white rounded-lg'>
           {Language[langKey].search} </button></form> 
    </div>
  )
}

export default GptSearchBar