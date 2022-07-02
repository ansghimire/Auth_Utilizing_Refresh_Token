import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import authReducer from '../features/auth/authSlice'
import { authLoadSlice } from "../features/auth/authLoadSlice";




export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        [authLoadSlice.reducerPath] : authLoadSlice.reducer,
        auth: authReducer
    },
    middleware : getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, authLoadSlice.middleware),
    devTools : true
})