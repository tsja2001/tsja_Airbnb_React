// redux使用toolkit写法
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighSocreData
} from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighSocreData().then((res) => {
      dispatch(changeHighSocreInfoAction(res))
    })

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighSocreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    // state.goodPriceInfo = payload
    // }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighSocreInfoAction,
  changeDiscountInfoAction
} = homeSlice.actions

export default homeSlice.reducer
