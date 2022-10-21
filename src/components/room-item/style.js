import styled from 'styled-components'

export const RoomItemWapper = styled.div`
  width: ${props => props.width};
  padding: 0 8px;
  box-sizing: border-box;
  color: ${props => props.theme.font.middle};
  cursor: pointer;
  .room-item {
    margin-bottom: 14px;
    .imgCover {
      padding-top: 66%;
      position: relative;
      overflow: hidden;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
      }
    }
    .tag {
      padding-top: 5px;
      font-size: 12px;
    }
    .title1 {
      font-weight: 600;
      font-size: 12px;
      padding-top: 5px;
    }
    .price {
      padding-top: 3px;
      font-size: 14px;
    }
    .bottom{
      padding-top: 5px;
      font-size: 10px;
      font-weight: 500;
      .count, .text{
        padding-left: 5px;
      }
    }
  }
`
