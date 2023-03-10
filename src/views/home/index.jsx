import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { isEmptyObject } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'
// import { Button } from 'antd';
// import Button from '@mui/material/Button';

export default memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual)
  // 派发异步的事件：发起网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {/* <HomeSectionV2 infoData={discountInfo}/> */}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
      {/* <Button type="primary">Antdesign:Button</Button> */}
      {/* <Button variant="text">mui:Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </HomeWrapper>
  )
})
