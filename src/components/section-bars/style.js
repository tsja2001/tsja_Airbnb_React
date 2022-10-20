import styled from "styled-components";

export const SectionBarWapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 15px;
  font-size: 16px;
  .item{
    padding: 10px 30px;
    border: 1.5px solid #f0f0f0;
    margin-right: 10px;
    ${props => props.theme.mixins.boxShadow};
  }
  .activeItem{
    border: 1px solid #398288;
    background-color: #398288;
    color: #fff;
  }
`