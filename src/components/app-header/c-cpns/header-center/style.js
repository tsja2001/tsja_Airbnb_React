import styled from 'styled-components'

export const CenterWrapper = styled.div`
.searchBox{
  padding: 6px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid #d0d0d0;
  ${porps => porps.theme.mixins.boxShadow}
  
  input {
    width: 200px;
    border: none;
    height: 100%;
    &:hover {
      outline: none
    }
  }
  input::placeholder {
    color: ${porps => porps.theme.font.middle};
  }
  .search{
    padding: 10px;
    background-color: ${porps => porps.theme.color.primary};
    color: white;
    border-radius: 50%;
  }
}
`
