import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    const contentRef = useRef()
    useEffect(() => {
        // 1.获取selectIndex对应的item
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft//当前元素距离某个父辈元素左边缘的距离
        const itemWidth = selectItemEl.clientWidth//元素的宽度(可视部分)，包含内边距（padding）:
        // 2.content的宽度
        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth//返回该元素的像素宽度（实际宽度）
        // console.log(itemLeft,itemWidth,contentWidth);
        // 3.获取selectIndex 要滚动的距离
        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
        // console.log(distance);
        if(distance < 0) distance = 0//左边的特殊情况
        const totalDistance = contentScroll - contentWidth
        if(distance > totalDistance) distance = totalDistance//右边的特殊情况
        // 5.改变位置即可
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])
    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator