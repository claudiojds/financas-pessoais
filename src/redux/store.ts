import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    // slices
    reducer:{
       auth: authSlice
    }
})

// Diponibilizara o reducers diponiveis
export type RootState = ReturnType<typeof store.getState>
// Para tipar os hooks
export type AppDispatch = typeof store.dispatch
