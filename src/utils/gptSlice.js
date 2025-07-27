import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        resetGptSearchView:(state)=>{
            state.showGptSearch=false;
        }
    }
})

export const {toggleGptSearchView,resetGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;