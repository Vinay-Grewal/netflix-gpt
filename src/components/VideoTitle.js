import React from 'react'
import { PLAY_ICON } from '../utils/constant';

const VideoTitle = (props) => {
  return (
    <div className='w-screen aspect-video pt-[30%] px-12 absolute bg-[linear-gradient(to_right,_black,_transparent_60%,_transparent_100%)]'>
      <h1 className='text-3xl font-bold text-white'>{props.title}</h1>
      <p className=' py-6 text-lg w-1/3 text-white'>{props.overview}</p>
      <div className='flex flex-row'>
        <button className='bg-white text-black px-3 py-1 text-lg  flex flex-row items-center rounded-lg mr-2 hover:bg-opacity-75'><img alt="playIcon" src={PLAY_ICON} className='h-10 pr-1'/>Play</button>
        <button className='bg-gray-500 text-white px-6 py-3 text-lg  bg-opacity-50 rounded-lg ml-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;