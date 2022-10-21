import { fetchRoomListAction } from '@/store/modules/entire/actionCreates'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  dispatch(fetchRoomListAction())

  const pageChanged = (e) => {
    // console.log(e)
  }
  
  return (
    <EntireWapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination onChange={pageChanged}/>
    </EntireWapper>
  )
})

export default Entire