// redux使用toolkit写法

import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    productList: ['aaa']
  },
  reducer: {

  }
})

export default homeSlice.reducer