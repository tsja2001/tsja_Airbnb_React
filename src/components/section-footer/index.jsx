import ShowMore from '@/assets/svg/showMore'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWapper } from './style'

const SectionFooter = memo((props) => {
  const {name} = props
  let displayText = '显示全部'
  if(name){
    displayText = `显示全部${name}房源`
  }

  return (
    <SectionFooterWapper color={name ? '#398288' :  '#222222'}>
      <div className="text">{displayText}</div>
      <ShowMore />
    </SectionFooterWapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
