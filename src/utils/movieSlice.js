import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        featuredMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        setFeaturedMovie:(state,action)=>{
            state.featuredMovie=action.payload;
        },
        clearMovies: (state) => {
            state.nowPlayingMovies = null;
            state.PopularMovies = null;
            state.topRatedMovies = null;
            state.upcomingMovies = null;
            state.featuredMovie = null;
        }

    }

});

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,setFeaturedMovie,clearMovies}=movieSlice.actions;
export default movieSlice.reducer;