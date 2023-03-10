import styled from "styled-components";

export const LeftWrapper = styled.div`
    /* color:var(--primary-color);//定义在variables.less */
    flex: 1;
    color: ${props =>props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
    cursor: pointer;
    margin-left: 25px;
`