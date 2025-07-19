import React from 'react'
import { NETFLIX_LOGO_URL, USER_ICON } from '../utils/constant'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
      navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between'>
        <img src={NETFLIX_LOGO_URL} alt="netflixLogo" className='w-44'/>
        {!user?null:<div className='flex p-2'>
          <img alt="user-icon" src={user.photoURL?user.photoURL:USER_ICON}className='w-12 h-12 mr-2'></img>
          <button className='text-white font-bold' onClick={()=>{handleSignOut()}}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header