import React from 'react'
import { Header } from './Header'

export const Login = () => {
  return (
    <div>
    <Header/>
         <div className='absolute'>
       <img src="https://images.pexels.com/photos/23495578/pexels-photo-23495578/free-photo-of-a-group-of-people-sitting-on-a-couch-watching-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt ="background"/>
        </div>
   <form className = "absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
    <h1 className="font-bold text-3xl px-2 py-3" >Sign In </h1>
    <input type ='text' placeholder='Email Address ' className='p-4 my-4 w-full bg-gray-700'/>
    <input type ='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className='py-3'>New to StreamSphere ? Sign Up Now</p>
       </form>
       
    </div>
  )
}
