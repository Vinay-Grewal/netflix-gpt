import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);
    if(movies==null){
        return null;
    }
    const mainMovie=movies[0];
    
    
  return (
    <div className=''>
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <VideoBackground id={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;