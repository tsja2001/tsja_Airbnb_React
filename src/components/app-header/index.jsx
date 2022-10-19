import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWapper>
  )
})

export default AppHeader