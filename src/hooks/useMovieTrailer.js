import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer=(movieId)=>{
    const [trailerId,setTrailerId]=useState(null);


    const getMovieVideos=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);  
    const json=await data.json();
    let filterData=json.results.filter((video)=>(video.type==='Trailer'));
 
    let flag=0
    if(filterData==null || filterData.length===0){
      flag=1;
      filterData.push(json.results[0]);
    }

    if(flag==0){
      const trailer=filterData[0];
      setTrailerId(trailer.key);
    }else{
      const trailerkey=filterData.key;
      setTrailerId(trailerkey);
    }
    
    
    
  }
 
  useEffect(() => {
  if (movieId) getMovieVideos();
}, [movieId]);



  return trailerId;
}
export default useMovieTrailer;