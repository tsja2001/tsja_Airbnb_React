// room列表标题

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle = '1' } = props

  return (
    <HeaderWapper>
      <div>
        <h2>{title}</h2>
        {subtitle && <div className="subTitle">{subtitle}</div>}
      </div>
    </HeaderWapper>
  )
})

export default SectionHeader

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

SectionHeader.defaultProps = {
  title: '',
  subtitle: ''
}
