import styled from "styled-components";

export const HeaderWrapper = styled.div`
    &.fixed {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
    }
    .content {
        position: relative;
        z-index: 999;
        transition: all 250ms ease;
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
        .top {
            display:flex;
            align-items: center;
            justify-content: space-between;
            height: 80px;
        }
        border-bottom: 1px solid ${props =>props.theme.isAlpha ? "rgba(222,222,222,0)" : "rgba(222,222,222,1)"};
        /* 抽离到下方SearchAreaWrapper */
        /* .search-area {
            height: 100px;
        } */
    }
    .cover {
        position: fixed;
        z-index: 9;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
    }
`
export const SearchAreaWrapper = styled.div`
    transition: height 250ms ease;
    /* height: 100px; */
    height: ${props => props.isSearch ? "100" : "0"}px;
`