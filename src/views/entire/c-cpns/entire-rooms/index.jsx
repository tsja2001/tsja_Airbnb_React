import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { EntireRoomsWapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => {
      return {
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
      }
    },
    shallowEqual
  )

  return (
    <EntireRoomsWapper>
      <div className="title">共{totalCount}处住所</div>
      <div className="roomListBox">
        {isLoading && <div className="cover"></div>}
        {roomList.map((item) => (
          <RoomItem key={item._id} data={item} width="20%" />
        ))}
      </div>
    </EntireRoomsWapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
