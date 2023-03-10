import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})
export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})
export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})
export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {
    // 返回新的函数
    return async (dispatch) => {
        // 修改currentPage
        dispatch(changeCurrentPageAction(page))
        // 1.根据页码获取最新的数据
        // const currentPage = getState().entire.currentPage
        // const res = await getEntireRoomList(currentPage * 20)
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeIsLoadingAction(false))
        // 2.获取到最新的数据，保存redux的store中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
        // getEntireRoomList(0).then(res => {
        //     console.log(res);
        // })
    }
}