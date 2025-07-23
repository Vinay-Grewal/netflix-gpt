import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = (props) => {
  const mainMovie=props.movie;
    
  return (
    <div className=''>
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <VideoBackground id={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;