// 每个room卡片

import React, { memo } from 'react'
import propTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { RoomItemWapper } from './style'

const RoomItem = memo((props) => {
  const { data, width = '25%' } = props
  return (
    <RoomItemWapper width={width}>
      <div className="room-item">
        <div className="imgCover">
          <img src={data.picture_url} alt="" />
        </div>
        <div className="tag" style={{ color: data.verify_info.text_color }}>
          {data.verify_info.messages.join('·')}
        </div>
        <div className="title">{data.name}</div>
        <div className="price">{data.price_format}/晚</div>
        <div className="bottom fr">
          <Rating
            name="read-only"
            value={data.star_rating ?? 5}
            sx={{ fontSize: '12px', color: '#398288' }}
          />
          <div className="count">{data.reviews_count}</div>
          <div className="text">{data.bottom_info?.content}</div>
        </div>
      </div>
    </RoomItemWapper>
  )
})

RoomItem.propTypes = {
  data: propTypes.object
}

export default RoomItem
