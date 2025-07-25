import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        lang:"en",
    },
    reducers:{
        modifyLanguage:(state,action)=>{
            state.lang=action.payload;
        },
    },
});

export const {modifyLanguage}=appConfigSlice.actions;
export default appConfigSlice.reducer;