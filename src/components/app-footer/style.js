import styled from 'styled-components'

export const AppFotterWapper = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 30px 0;
  width: 100%;
  .content {
    margin: 0 auto;
    width: ${props => props.theme.contentWidth};
    .title{
      font-weight: 800;
      color: ${props => props.theme.font.middle};
      margin-bottom: 20px;
    }
    .list{
      font-weight: 400;
      margin-bottom: 10px;

      color: ${props => props.theme.font.light}
    }
  }
`
