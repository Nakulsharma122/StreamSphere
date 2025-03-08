import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, logo } from '../utils/constants';
import Button from '../utils/signOutButton';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';




export const Header = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
     navigate("/error");  //New error page must be created . 
    });
  }
   const handleGptSearchClick =()=>{
    dispatch(toggleGptSearchView());
   }
  useEffect(()=>{
   const subscribe =  onAuthStateChanged(auth, (user) => {
           if (user) {
             const {uid, email, displayName,photoURL} = user;
             dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL :photoURL}));
             navigate("/browse");
             
           } else {
               dispatch(removeUser());
               navigate("/");
           }
         });
         return () => subscribe();
},[]);

const handleLanguageChange = (e) =>{
     dispatch(changeLanguage(e.target.value));
}


  return (
  
   
                   <div className='absolute w-full px-5 py-2 z-10    flex flex-col  justify-center md:flex-row  md:justify-between'>
       <img  className='w-20 h-20 mx-auto md:mx-0' src={logo} alt="logo"/>
       {user && 
       <>
      
       
       <div className='pt-3 flex'>
        {showGptSearch &&  <select className='p-2 m-4 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((language) =>
        (
            <option key ={language.identifier} value={language.identifier} >{language.name}</option>
        )
        )}
        </select>
             }
        
       <button onClick={handleGptSearchClick} className='px-5 mx-4 my-3 bg-purple-800 rounded-lg text-white'>
        {showGptSearch ? "Home Page" :"GPT Search"}</button>
       <Button onClick={handleSignOut} >
       </Button>
          </div>
          </> 
           }
        </div>
      
   
  
   
  )
}
