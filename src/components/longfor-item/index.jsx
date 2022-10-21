import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforItemWapper } from './style'

const LongforItem = memo((props) => {
  const { data } = props
  return (
    <LongforItemWapper>
      <img className="img" src={data.picture_url} alt="" />
      <div className="text">
        <div className="line1">{data.city}</div>
        <div className="line2">{data.price}</div>
      </div>
    </LongforItemWapper>
  )
})

LongforItem.propTypes = {
  data: PropTypes.object
}

export default LongforItem
