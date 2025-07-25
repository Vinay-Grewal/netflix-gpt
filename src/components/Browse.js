import { useDispatch, useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import { setFeaturedMovie } from '../utils/movieSlice';

import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const dispatch=useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();

 const nowplayingmovies=useSelector((store)=>store.movie?.nowPlayingMovies);
 const featuredmovie=useSelector((store)=>store.movie?.featuredMovie);

 useEffect(()=>{
    if(nowplayingmovies && nowplayingmovies.length>0 && !featuredmovie){
      dispatch(setFeaturedMovie(nowplayingmovies[0]));
    }
 },[nowplayingmovies,featuredmovie,dispatch]);

  return (
    <div className=''>
      <Header/>
      {showGptSearch?<GptSearchPage/>:<>
      {featuredmovie===null?null:<MainContainer movie={featuredmovie}/>}
      <SecondaryContainer/>
      </>}
      
    </div>
  )
}

export default Browse