import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    // 从props获取数据
    const { infoData } = props
    // 定义内部的state

    // 下列代码无法渲染，第一次渲染initialName无数据，useState只有传入的第一次数据才有效
    // 解决方式：在home页先判断discountInfo是否为空，有数据才渲染当前组件，??也可省略
    // const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)
    // const [name, setName] = useState("佛山")

    // console.log(infoData.dest_list[0]);
    // const [name, setName] = useState(infoData)
    const tabNames = infoData.dest_address?.map(item => item.name)
    // 事件处理函数
    const tabClickHandle = useCallback(function (index, name) {
        setName(name)
    }, [])
    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
            {/* <SectionRooms roomList={infoData.dest_list?.["成都"]} itemWidth={"33.3%"}/> */}
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.3%"} />
            <SectionFooter name={name}/>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2