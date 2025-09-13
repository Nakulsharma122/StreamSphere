import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video absolute  pt-[30%] md:pt-[20%] px-4 md:px-12 text-white bg-gradient-to-r'>
         <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
         <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
         <div className='my-3 md:m-0'>
            <button className='text-black bg-white py-2 md:py-4 md:px-12 px-2 text-xl  rounded-lg hover:opacity-80'> 
            ▶  Play</button>
            <button className= 'hidden md:inline-block mx-2  text-black bg-white p-4 px-12 text-xl  rounded-lg hover:opacity-80'> ℹ More info</button>
         </div>
    </div>
   
  )
}

export default VideoTitle