import styled from 'styled-components'

export const ScrollViewWapper = styled.div`
  /* overflow: hidden; */
  width: 100%;
  position: relative;
  .btn{
    width:30px;
    height:30px;
    background-color:#fff;
    border:1px solid #f9f9f9;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.14);
    z-index: 999;
    cursor: pointer;
  }
  .left{
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .right{
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
  .scollBox{
    width:100%;
    overflow: hidden;
  }
  .scroll-content {
    position: relative;
    transition: all  0.25s ease !important;
    left: ${props => '-' + props.offsetLeft + 'px'};
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }
`
