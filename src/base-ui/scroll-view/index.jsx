import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    // 定义内部的状态
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    const [posIndex, setPosIndex] = useState(0)

    // 不推荐使用useState(0)
    const totalDistanceRef = useRef()

    // 组件渲染完毕，判断是否显示右侧的按钮
    const scrollConteRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollConteRef.current.scrollWidth//一共可以滚动的宽度
        const clientWidth = scrollConteRef.current.clientWidth//本身占据的宽度
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [props.children])
    // 事件处理逻辑
    function controlClickHandle(isRight) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl = scrollConteRef.current.children[newIndex]
        // console.log(newEl.offsetLeft);
        const newOffsetLeft = newEl.offsetLeft
        scrollConteRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        // 是否继续显示右侧的按钮
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        // 是否继续显示左的按钮
        setShowLeft(newOffsetLeft > 0)
    }
    return (
        <ViewWrapper>
            {showLeft && (
                <div className='control left' onClick={e => controlClickHandle(false)}>
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div className='control right' onClick={e => controlClickHandle(true)}>
                    <IconArrowRight />
                </div>
            )}
            <div className="scroll">
                <div className="scroll-content" ref={scrollConteRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

// ScrollView.propTypes = {}

export default ScrollView