import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import appConfigReducer from "./appConfigSlice";
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movie:moviesReducer,
            gpt:gptReducer,
            appConfig:appConfigReducer,
        }
    }
)

export default appStore;