import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconGlobal from '@/assets/svg/icon_global'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false)
  // 副作用代码
  useEffect(()=>{
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click",windowHandleClick,true)
    // 取消监听
    return () => {
      window.removeEventListener("click",windowHandleClick,true)
    }
  },[])
  // 事件处理函数
  function profileClickHandel() {
    // setShowPanel(!showPanel)
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandel}>
        <IconProfileMenu />
        <IconProfileAvatar />
        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight