import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        addUser:(state,action)=>{
            const newstate=action.payload;
            return newstate;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
});

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;

