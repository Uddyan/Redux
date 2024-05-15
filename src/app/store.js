import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '../services/api'


export const store = configureStore({
    //this is the place where we can add all the reducers
    //reducers: {counter: counterReducer},
    //added from counterSlice.js
  reducer: {
    // Add the generated reducer as a specific top-level slice
    //cache ivalidation polling
    [api.reducerPath]: api.reducer,
  },
    middleware:(getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    //devtools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)