// RTK方式
import { getHomeGoodPriceDate } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdate", async () => {
    // getHomeGoodPriceDate().then(res => {
    //     console.log(res);
    // })
    const res = await getHomeGoodPriceDate()
    return res
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        }
    },
    extraReducers: {
        [fetchHomeDataAction.fulfilled](state,{payload}) {
            state.goodPriceInfo = payload
        }
    }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer