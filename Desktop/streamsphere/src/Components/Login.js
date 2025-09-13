import React, { useState,useRef} from 'react'
import { Header } from './Header';
import {checkValidData, checkValidData1}  from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { backgroundImage, user_avatar } from '../utils/constants';



export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () =>{

      const message = isSignInForm ? checkValidData(email.current.value, password.current.value):
       checkValidData1(name.current.value,email.current.value, password.current.value) ;

      setErrorMessage(message);

      if (message)return ;
      if (!isSignInForm){
         // Sign up 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
       
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: user_avatar
      }).then(() => {
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL :photoURL}));
        
      }).catch((error) => {
       setErrorMessage(error.message);
      });
       
    
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode+"-"+errorMessage);
  });

      }
      else {
        // Sign in 
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
      }
    
  }
  const toggleSignInForm = () =>{
    setIsSignInForm (!isSignInForm);
  }
  return (
    <div className=''>
    <Header/>
         <div className='absolute pt-20 h-screen w-screen   md:absolute md:w-full'>
       <img src={backgroundImage} alt ="background" className='h-full w-full object-cover'/>
        </div>

     <form  onSubmit={(e)=>{e.preventDefault()}}className ="absolute p-12 bg-black    md:w-3/12   my-36  mx-14 md:mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
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
