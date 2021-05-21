import { configureStore } from '@reduxjs/toolkit'
import searchQuerySliceReducer from './searchQuerySlice'

export default configureStore({
  reducer: {
    searchQuery: searchQuerySliceReducer,
  },
});