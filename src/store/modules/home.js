// RTK方式
import {
    getHomeGoodPriceDate,
    getHomeHighScoreDate,
    getHomeDiscountDate,
    getHomeHotRecommendDate,
    getHomeLongforDate,
    getHomePlusDate
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdate", (payload, { dispatch }) => {
    getHomeGoodPriceDate().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreDate().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountDate().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendDate().then(res => {
        dispatch(changeHotRecommendInfoAction(res))
    })
    getHomeLongforDate().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusDate().then(res => {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo: {},
        plusInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, { payload }) {
            state.hotRecommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        },
    },
    extraReducers: {
        // [fetchHomeDataAction.fulfilled](state, { payload }) {
        //     state.goodPriceInfo = payload
        // }
    }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction,
} = homeSlice.actions
export default homeSlice.reducer