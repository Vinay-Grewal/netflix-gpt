import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer=(movieId)=>{
    const [trailerId,setTrailerId]=useState(null);


    const getMovieVideos=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);  
    const json=await data.json();
    
    let filterData=json.results.filter((video)=>(video.type==='Trailer'));
    
    
    if(filterData===null || filterData.length===0){
      filterData=json.results[0];
    }
    const trailer=filterData[0];
    
    setTrailerId(trailer.key);
  }
  // useEffect(()=>{
  //   getMovieVideos();
  // },[]);
  useEffect(() => {
  if (movieId) getMovieVideos();
}, [movieId]);



  return trailerId;
}
export default useMovieTrailer;