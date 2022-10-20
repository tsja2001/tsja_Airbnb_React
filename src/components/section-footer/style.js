import styled from 'styled-components'

export const SectionFooterWapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${props => props.color};
  .text{
    margin-right: 5px;
    &:hover{
      text-decoration: under
    }
  }
`
