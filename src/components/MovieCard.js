import React from 'react'
import { MOVIE_CARD_IMAGE_URL } from '../utils/constant'

const MovieCard = (props) => {
    const poster=props.poster;
    const onClick=props.onClick;
  return (
    <div className="w-48 pr-6 hover:scale-110 transform transition-transform duration-300" onClick={onClick}>
        <img className='rounded-md' alt="movie_thumbnial" src={MOVIE_CARD_IMAGE_URL+poster}/>
    </div>
  )
}

export default MovieCard