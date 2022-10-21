import styled from 'styled-components'

export const EntireRoomsWapper = styled.div`
  margin-top: 20px;
  .title {
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0;
  }
  .roomListBox {
    margin: 0 -8px;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    .cover{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color: #ffffffb0;
      z-index: 999;
    }
  }
`
