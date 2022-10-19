import React, { memo } from 'react'
import { footerData } from './footData'
import { AppFotterWapper } from './style'

const AppFooter = memo(() => {
  return (
    <AppFotterWapper>
        <div className="content frcsb">
            {
              footerData.map((item, index) => (
                <div className="block" key={index}>
                  <div className="title">{item.name}</div>
                  {item.list.map((childItem, childIndex) => (
                    <div className="list" key={childIndex}>{childItem}</div>
                  ))}
                </div>
              ))
            }
        </div>
    </AppFotterWapper>
  )
})

export default AppFooter
