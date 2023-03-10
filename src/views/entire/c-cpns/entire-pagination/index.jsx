import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }),shallowEqual)
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  // 事件处理的逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(event, page) {
    // 回到顶部
    window.scrollTo(0,0)
    // console.log(event, page);
    // 更新最新的页码：redux=>currentPage

    // dispatch(changeCurrentPageAction(page - 1))
    // dispatch(fetchRoomListAction())
    // 重构
    dispatch(fetchRoomListAction(page - 1))
  }
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} onChange={pageChangeHandle} />
            <div className="desc">
              第 {startCount} - {endCount} 个房源，共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination