import React, { useEffect } from 'react'
import { NETFLIX_LOGO_URL, USER_ICON, USER_PROFILE_PHOTO } from '../utils/constant'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { clearMovies } from '../utils/movieSlice'
import Disclaimer from './Disclaimer'

const Header = () => {
  const dispatch=useDispatch();
  
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      dispatch(clearMovies());
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email=user.email;
        const displayName=user.displayName;
        const photoURL=user.photoURL;
        dispatch(addUser({uid,email,displayName,photoURL}));
        navigate("/browse");
      } else {
    //anthing to do when signout
        dispatch(removeUser());
        
        navigate("/");
      }
    });
    // unsubscribe the onauthstatechanged when header-component unmounts.
    return ()=>{unsubscribe();}
},[]);

  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between z-10'>
        <img src="/images/logo.png" alt="netflixLogo" className='w-52'/>
        <Disclaimer/>
        {/* <p className='text-white absolute left-72 font-bold text-xl'>Disclaimer: This is not the offical NETFLIX webpage! Its a learning project please don't share your private credentials here! </p> */}
        {!user?null:<div className='flex p-2'>
          <img alt="user-icon" src={user.photoURL?user.photoURL:USER_ICON}className='w-12 h-12 mr-2'></img>
          <button className='text-white font-bold' onClick={()=>{handleSignOut()}}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header