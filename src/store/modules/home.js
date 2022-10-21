// redux使用toolkit写法
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighSocreData,
  getHomeHotRecommendData,
  getHomeLongforData
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

    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res))
    })

    getHomeLongforData().then((res) => {
      dispatch(changeLongforData(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {}
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
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforData(state, { payload }) {
      state.longforInfo = payload
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
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongforData
} = homeSlice.actions

export default homeSlice.reducer
