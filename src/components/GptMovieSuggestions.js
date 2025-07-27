import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gptmovies=useSelector((store)=>store.movie.gptSuggestedMovies);
  if(!gptmovies){
      return null;
  }
  
  return (
    <div className='p-4 m-4 bg-white/10 backdrop-blur-md rounded-xl text-white flex justify-center'>
      <MovieList title={"Suggestions"} movies={gptmovies}/>   
      
    </div>
  )
}

export default GptMovieSuggestions