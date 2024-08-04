import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    // slices
    reducer:{

    }
})

// Diponibilizara o reducers diponiveis
export type RootState = ReturnType<typeof store.getState>
// Para tipar os hooks
export type AppDispatch = typeof store.dispatch
