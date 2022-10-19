// 生成room卡片列表

import React, { memo } from 'react'
import RoomItem from '../room-item'
import { SectionRoomesWapper } from './style'

const SectionRooms = memo((props) => {
  const { list = [] } = props
  return (
    <SectionRoomesWapper>
      <div className="listBox frw">
        {list.slice(0, 8).map((item) => (
          <RoomItem width={props.width} key={item.id} data={item}></RoomItem>
        ))}
      </div>
    </SectionRoomesWapper>
  )
})

export default SectionRooms
