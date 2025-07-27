import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        featuredMovie:null,
        gptSuggestedMovies:null,
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
        setGptSuggestedMovies:(state,action)=>{
            
            state.gptSuggestedMovies=action.payload;
        },
        clearGptSuggestedMovies:(state)=>{
            state.gptSuggestedMovies=null;
        },
        clearMovies: (state) => {
            state.nowPlayingMovies = null;
            state.PopularMovies = null;
            state.topRatedMovies = null;
            state.upcomingMovies = null;
            state.featuredMovie = null;
            state.gptSuggestedMovies=null;
        }

    }

});

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,setFeaturedMovie,setGptSuggestedMovies,clearGptSuggestedMovies,clearMovies}=movieSlice.actions;
export default movieSlice.reducer;