import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/productSlice'


export const store = configureStore({
  reducer: {
      product:bookReducer

  }
})