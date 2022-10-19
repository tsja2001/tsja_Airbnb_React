import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import Glob from '@/assets/svg/glob'
import Avantar from '@/assets/svg/avantar'
import Menu from '@/assets/svg/menu'

const HeaderRight = memo(() => {
  const [showList, changeShowList] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => changeShowList(false), true)

    // return window.removeEventListener('click')
  }, [])

  return (
    <RightWrapper>
      <div className="btn">登陆</div>
      <div className="btn">注册</div>
      <div className="btn">
        <Glob></Glob>
      </div>
      <div className="avantar frcc" onClick={() => changeShowList(true)}>
        <div className="menu">
          <Menu></Menu>
        </div>
        <div className="avantarIcon">
          <Avantar></Avantar>
        </div>
        {showList && (
          <div className="list">
            <div className="box box1">
              <div className="lineItem">登陆</div>
              <div className="lineItem">注册</div>
            </div>
            <div className="box box2">
              <div className="lineItem">出租房源</div>
              <div className="lineItem">开展体验</div>
              <div className="lineItem">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
