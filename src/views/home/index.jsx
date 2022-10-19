import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import SectionRooms from '@/components/section-rooms'

const home = memo(() => {
  const dispatch = useDispatch()

  // 调用请求, 数据存储到state中
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // 获取state中存储的请求数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )
  console.log(goodPriceInfo)

  return (
    <HomeWapper>
      <HomeBanner />
      <div className="content">
        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms list={goodPriceInfo?.list}></SectionRooms>
        </div>
      </div>
    </HomeWapper>
  )
})

export default home
