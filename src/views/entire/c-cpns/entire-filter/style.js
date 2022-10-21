import styled from 'styled-components'

export const EntireFilterWapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  .item{
    padding: 8px 15px;
    font-size: 12px;
    border: 1px solid #f0f0f0;
    margin-right: 10px;
    border-radius: 5px;
    &:hover{
      background-color: #f6f6f6;
    }
  }
  .active{
    background-color: ${props => props.theme.color.secondary};
    color: white;
    &:hover{
      background-color: #00848ae0;
    }
  }
`
