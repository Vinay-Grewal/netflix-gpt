import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={NETFLIX_BACKGROUND_URL} alt="BackgroundImg"></img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage