import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
    reducer:{
        main:mainReducer,
        home:homeReducer,//createSlice方式配置的reducer
        detail:detailReducer,//createSlice方式配置的reducer
        entire:entireReducer,//普通方式配置的reducer
    }
})

export default store