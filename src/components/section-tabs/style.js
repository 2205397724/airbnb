import styled from "styled-components";

export const TabsWrapper = styled.div`
    /* display: flex;//在scroll-view中进行了flex布局，在此处设置flex会使得元素宽带缺失，未占满100% */
    /* overflow: auto;//出现滚动条 */
    .item {
        flex-basis: 120px;
        flex-shrink: 0;
        box-sizing: border-box;
        padding: 14px 16px;
        margin-right: 16px;
        border-radius: 3px;
        font-size: 17px;
        text-align: center;
        border: 0.5px solid #D8D8D8;
        white-space: nowrap;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}

        &:last-child {
            margin-right: 0;
        }
        &.active {
            color: #fff;
            background-color: ${props => props.theme.color.secondColor};
        }
    }
    
`