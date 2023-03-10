import styled from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink: 0;
    box-sizing: border-box;
    /* width: 25%; */
    width: ${props => props.itemWidth};
    padding: 8px;
    margin: 8px 0;
    .inner {
    padding: 8px;
  }

  .cover {
    /* img {
        width: 100%;
    } */
    /* 预留出图片的位置 */
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /* 不压缩图片，可能展示不完整 */
      object-fit: cover;
    }
  }
  .slider {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);
        &.right {
          background: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      left: 0;
      right: 0;
      bottom: 10px;
      width: 30%;
      margin: 0 auto;
      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          &.active {
            width: 10px;
            height: 10px;
            background-color: rgba(0,0,0,0.5);
          }
        }
      }
    }
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    /* color: #39576a; */
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    /* 隐藏多余文本 */
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    /* 跳转星星的间距 */
    .MuiRating-icon {
      margin-left: -4px;
    }
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }
    .extra {
      /* white-space: nowrap; */
      overflow: hidden;  
      text-overflow: ellipsis; 
      display: -webkit-box; 
      -webkit-line-clamp: 1; 
      -webkit-box-orient: vertical;
    }
  }
`