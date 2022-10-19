// redux使用toolkit写法
import { getHomeGoodPriceData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchData",async () => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducer: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
