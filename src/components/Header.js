import React from 'react'
import { NETFLIX_LOGO_URL } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
        <img src={NETFLIX_LOGO_URL} alt="netflixLogo" className='w-44'/>
    </div>
  )
}

export default Header