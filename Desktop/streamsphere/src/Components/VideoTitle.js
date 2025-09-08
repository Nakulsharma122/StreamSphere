import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video absolute pt-[20%] px-12 text-white bg-gradient-to-r'>
         <h1 className='text-6xl font-bold'>{title}</h1>
         <p className='py-6 text-lg w-1/2'>{overview}</p>
         <div>
            <button className='text-black bg-white p-4 px-12 text-xl  rounded-lg hover:opacity-80'> 
            ▶  Play</button>
            <button className= 'mx-2  text-black bg-white p-4 px-12 text-xl  rounded-lg hover:opacity-80'> ℹ More info</button>
         </div>
    </div>
   
  )
}

export default VideoTitle