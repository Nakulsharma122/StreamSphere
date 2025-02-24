import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';
import Button from '../utils/signOutButton';




export const Header = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
 
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
     navigate("/error");  //New error page must be created . 
    });
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


  return (
   <div className=''>
   
                   <div className='absolute w-full px-5 py-2 z-10  flex justify-between'  >
       <img  className='w-20 h-20 m-3' src={logo} alt="logo"/>
    
       {user && 
       <div className='pt-5'>
       <Button onClick={handleSignOut} >
       </Button>
          </div> 
           }
        </div>
        </div>
   
  
   
  )
}
