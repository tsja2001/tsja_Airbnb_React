import Search from '@/assets/svg/search'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="searchBox frcc">
        <input type="text" placeholder="搜索房源和体验" />
        <div className="search">
          <Search></Search>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
