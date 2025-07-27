import React from 'react'
import MovieCard from './MovieCard.js';
import { useDispatch } from 'react-redux';
import { clearGptSuggestedMovies, setFeaturedMovie } from '../utils/movieSlice.js';
import { resetGptSearchView } from '../utils/gptSlice.js';

const MovieList = (props) => {
    const title=props.title;
    const movies=props.movies;
    const dispatch=useDispatch();
    if(!movies){return null;}
    
    

   
    
  return (
    <div className='px-6'>
        <h1 className='py-4 text-3xl text-white'>{movies.length===0?"No Movies":title}</h1>
        <div className='flex py-3 overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        <div className='flex '>
          {movies.map((movie) => {
             return (
               <MovieCard
                 key={movie.id}
                 poster={movie.poster_path}
                 onClick={() =>{ dispatch(setFeaturedMovie(movie), dispatch(resetGptSearchView())); window.scrollTo({ top: 0, behavior: 'smooth' });}}
              />
            );
          })}
        
        </div>
        </div>
    </div>
    
  )
}

export default MovieList