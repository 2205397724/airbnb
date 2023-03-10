import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    color:${props => props.theme.text.primaryColor};
    font-weight: 600;
    .btns {
        display: flex;
        box-sizing: content-box;
        color:${props => props.theme.isAlpha ? "#fff" : props.theme.isAlpha};
        .btn {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            cursor: pointer;
            border-radius: 22px;
            box-sizing: content-box;
            &:hover {
                background-color:${props => props.theme.isAlpha ? "rgba(255,255,255,.3)" : "#f5f5f5"};
            }
        }
    }
    .profile {
        position: relative;
        display: flex;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        cursor: pointer;
        color: #999;
        /* transition: box-shadow 0.2s ease;
        &:hover {
            box-shadow:  0 2px 4px rgba(0,0,0,0.18);
        } */
        ${props => props.theme.mixin.boxShadow}
    }
    .panel {
        position: absolute;
        right: 0;
        top: 50px;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(0,0,0,0.18);
        .top,.bottom {
            padding: 10px 0;
            .item {
                height: 30px;
                line-height: 40px;
                padding: 0 10px;
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
        .top {
            border-bottom:  1px solid #ddd;
        }
    }
`