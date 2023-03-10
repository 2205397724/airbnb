import { useEffect, useState } from "react";
import {throttle} from "underscore"

export default function useScrollPosition() {
    // 状态记录位置
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    // 监听window滚动
    useEffect(() => {
        // 使用underscore库的throttle进行节流
        const handleScroll = throttle(() => {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        },300)
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    // 返回
    return { scrollX, scrollY }
}