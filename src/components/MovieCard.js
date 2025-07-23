import React from 'react'
import { MOVIE_CARD_IMAGE_URL } from '../utils/constant'

const MovieCard = (props) => {
    const poster=props.poster;
  return (
    <div className='w-48 pr-6 hover:scale-110 transform transition-transform duration-300 '>
        <img className='rounded-md' alt="movie_thumbnial" src={MOVIE_CARD_IMAGE_URL+poster}/>
    </div>
  )
}

export default MovieCard