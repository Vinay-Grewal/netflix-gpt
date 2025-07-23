import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowplayingmovies=useSelector((store)=>store.movie.nowPlayingMovies);
  const popularmovies=useSelector((store)=>store.movie.PopularMovies);
  const topratedmovies=useSelector((store)=>store.movie.topRatedMovies);
  const upcomingmovies=useSelector((store)=>store.movie.upcomingMovies);
 
  

  return (
    <div className=' bg-black'>
      <div className="-mt-60 relative z-20">
      {nowplayingmovies===null?null:<MovieList title={"Now Playing"} movies={nowplayingmovies}/>}
      {topratedmovies===null?null:<MovieList title={"Top Rated"} movies={topratedmovies}/>}
      {popularmovies===null?null:<MovieList title={"Popular"} movies={popularmovies}/>}
      {upcomingmovies===null?null:<MovieList title={"Upcoming"} movies={upcomingmovies}/>}
      </div>

    </div>
  )
}

export default SecondaryContainer