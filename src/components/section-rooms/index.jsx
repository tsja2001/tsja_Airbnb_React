import React, { memo } from 'react'
import RoomItem from '../room-item'
import { SectionRoomesWapper } from './style'

const SectionRooms = memo((props) => {
  const { list = [] } = props
  return (
    <SectionRoomesWapper>
      <div className="listBox frw">
        {list.slice(0, 6).map((item) => (
          <RoomItem key={item.id} data={item}></RoomItem>
        ))}
      </div>
    </SectionRoomesWapper>
  )
})

export default SectionRooms
