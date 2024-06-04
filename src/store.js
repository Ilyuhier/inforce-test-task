import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './Storage/storage'

export default configureStore({
  reducer: {
    items: itemsReducer
  }
})