import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfo from './c-cpns/detail-infos'
import DetailPicrures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

export default memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPicrures />
      <DetailInfo />
    </DetailWrapper>
  )
})
