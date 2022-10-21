import styled from 'styled-components'

export const LongforItemWapper = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  .img {
    width: 172px;
  }
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    color: #fff;
    background-image: linear-gradient(#00000000, #000000ff);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    .line1{
      padding-top: 20px;
      font-weight: 600;
    }
    .line2{
      padding-top:9px;
      font-size: 13px;
    }
  }
  
`
