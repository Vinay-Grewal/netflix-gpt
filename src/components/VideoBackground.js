
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = (props) => {
  const movieId=props.id;
  

    const trailerId=useMovieTrailer(movieId);
    if(!trailerId) return null;
  
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/" + trailerId+"?&autoplay=1&mute=1&loop=1"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin" >
      </iframe>
    </div>
  )
}

export default VideoBackground;