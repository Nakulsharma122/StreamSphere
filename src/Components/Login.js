import React, { useState } from 'react'
import { Header } from './Header'



export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm (!isSignInForm);
  }
  return (
    <div>
    <Header/>
         <div className='absolute'>
       <img src="https://images.pexels.com/photos/23495578/pexels-photo-23495578/free-photo-of-a-group-of-people-sitting-on-a-couch-watching-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt ="background"/>
        </div>
   <form className = "absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
    <h1 className="font-bold text-3xl px-2 py-3" >{isSignInForm ? "Sign  In" :"Sign Up"} </h1>

    {!isSignInForm &&(
      <input type ='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
    )}

    <input type ='text' placeholder='Email Address ' className='p-4 my-4 w-full bg-gray-700'/>
    <input type ='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? (
              <>New to StreamSphere ? <span className="text-red-500">Sign Up Now</span></>
                ) : (
          <>Already registered? <span className="text-red-500">Sign In</span></>
               )}
        </p>
       </form>
       
    </div>
  )
}
