import React, { memo, useState } from 'react'
import { EntireFilterWapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  const clickHandler = (clickCurrentName) => {
    const newItems = [...selectItems]

    const index = newItems.findIndex((item) => item === clickCurrentName)

    if (index === -1) {
      newItems.push(clickCurrentName)
    } else {
      newItems.splice(index, 1)
    }

    setSelectItems(newItems)
  }

  return (
    <EntireFilterWapper>
      {filterData.map((item) => (
        <div
          onClick={() => clickHandler(item)}
          className={classNames('item', { active: selectItems.includes(item) })}
          key={item}
        >
          {item}
        </div>
      ))}
    </EntireFilterWapper>
  )
})

export default EntireFilter
