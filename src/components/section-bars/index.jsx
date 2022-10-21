/**
 * 横向滚动选择条
 */

import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionBarWapper } from './style'

const SectionBar = memo((props) => {
  const { list = [], lable = '', callback } = props

  const [currentIndex, changeCurrentIndex] = useState(0)

  const clickHandler = (item, index) => {
    changeCurrentIndex(index)
    callback(item[lable])
  }

  return (
    <SectionBarWapper>
      <ScrollView>
         {list.map((item, index) => (
          <div
            key={index}
            className={classNames('item', {
              activeItem: index === currentIndex
            })}
            onClick={() => clickHandler(item, index)}
          >
            {item[lable]}
          </div>
        ))}
      </ScrollView>
    </SectionBarWapper>
  )
})

SectionBar.propTypes = {
  list: PropTypes.array,
  lable: PropTypes.string,
  callback: PropTypes.func
}

export default SectionBar
