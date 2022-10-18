import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReucer from './modules/entire'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    entire:entireReucer
  }
})