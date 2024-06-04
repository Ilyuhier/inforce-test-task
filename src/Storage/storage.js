import { createSlice } from '@reduxjs/toolkit'

export const store = createSlice({
  name: 'items',
  initialState: {
    value: null
  },
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setItems } = store.actions

export default store.reducer