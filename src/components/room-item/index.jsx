import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemWidth = "20%", itemClick } = props
    const [selectIndex, setSelectIndex] = useState(0)
    const sliderRef = useRef()
    // 事件处理逻辑
    function controlClickHandle(isRight = true,event) {
        // 1.上一个面板/下一个面板
        isRight ? sliderRef.current.next() : sliderRef.current.prev()
        // 2.最新的索引
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData?.picture_urls.length
        if (newIndex < 0) newIndex = length - 1
        if (newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)
        // 阻止事件冒泡
        event.stopPropagation()
    }
    function itemClickHandle() {
        if(itemClick) itemClick(itemData)
    }
    // 子元素的赋值
    // 单个图片的展示
    const pictureElement = (
        <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div>
    )
    // 图片轮播图的展示
    const sliderElement = (
        <div className="slider">
            <div className="control">
                <div className="btn left" onClick={e => controlClickHandle(false,e)}>
                    <IconArrowLeft width="20" height="20" />
                </div>
                <div className="btn right" onClick={e => controlClickHandle(true,e)}>
                    <IconArrowRight width="20" height="20" />
                </div>
            </div>
            <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="dot-item" key={item}>
                                    <span className={classNames("dot", { active: selectIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            <Carousel dots={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
    return (
        <ItemWrapper
            verifyColor={itemData.verify_info.text_color || "#39576a"}
            itemWidth={itemWidth}
            onClick={itemClickHandle}
        >
            <div className="inner">
                {/* 判断是否要展示轮播图 */}
                {!itemData.picture_urls ? pictureElement : sliderElement}
                <div className="desc">
                    {itemData.verify_info.messages.join(' - ')}
                </div>
                <div className="name">{itemData.name}</div>
                <div className="price">￥{itemData.price}/晚</div>
                <div className="bottom">
                    {/* 此处应该用“??”而不是“||”,存在为0的特殊情况，“??”0不会被当作false */}
                    <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly size='small' sx={{ color: "#00848a" }}></Rating>
                    <span className="count">{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info &&
                        <span className="extra">·{itemData?.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem