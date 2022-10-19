import styled from 'styled-components'

export const RightWrapper = styled.div`
  /* .box { */
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .btn {
      padding: 0 15px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row nowrap;
      font-size: 14px;
      color: ${(props) => props.theme.font.middle};
      transition: all 0.1s;
      border-radius: 20px;
      &:hover {
        background-color: #f0f0f0;
      }
    }
    .avantar {
      padding: 4px;
      border-radius: 40px;
      border: 1px solid #d0d0d0;
      margin-right: 23px;
      position: relative;
      ${(porps) => porps.theme.mixins.boxShadow}
      .menu {
        color: ${(props) => props.theme.font.middle};
        padding: 0 10px;
        margin-right: 3px;
      }
      .list{
        position: absolute;
        top: 50px;
        right: 0;
        width: 240px;
        background-color: #fff;
        box-shadow: 0 0px 5px rgba(0,0,0,0.18);
        border-radius: 10px;
        .box{
          padding: 5px 0;
          .lineItem{
            width: 100%;
            padding: 15px 15px;
            box-sizing: border-box;
            &:hover{
              background-color: #f7f7f7
            }
          }
        }
        .box1{
          border-bottom: 1px solid #e0e0e0;
        }
      }
    }
  /* } */
`
