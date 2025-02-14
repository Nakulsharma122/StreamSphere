import React, { useState,useRef} from 'react'
import { Header } from './Header';
import {checkValidData, checkValidData1}  from '../utils/validate';



export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{

      const message = isSignInForm ? checkValidData(email.current.value, password.current.value): checkValidData1(name.current.value,email.current.value, password.current.value) ;
      setErrorMessage(message);
    
  }
  const toggleSignInForm = () =>{
    setIsSignInForm (!isSignInForm);
  }
  return (
    <div>
    <Header/>
         <div className='absolute'>
       <img src="https://images.pexels.com/photos/23495578/pexels-photo-23495578/free-photo-of-a-group-of-people-sitting-on-a-couch-watching-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt ="background"/>
        </div>

     <form  onSubmit={(e)=>{e.preventDefault()}}className = "absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl px-2 py-3" >{isSignInForm ? "Sign  In" :"Sign Up"} </h1>

      {!isSignInForm &&(
        <input ref={name} type ='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
        )}
    <input type ='text' placeholder='Email Address ' className='p-4 my-4 w-full bg-gray-700' ref={email}/>
    <input type ='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700' ref= {password}/>

      <p className='text-red-500  font-bold'>{errorMessage}</p>

    <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>
      {isSignInForm ? (
          <>New to StreamSphere ? <span className="text-red-500 font-bold">Sign Up Now</span></>
          ) : (
          <>Already registered? <span className="text-red-500 font-bold">Sign In</span></>
          )}
        </p>
       </form>
       
    </div>
  )
}
