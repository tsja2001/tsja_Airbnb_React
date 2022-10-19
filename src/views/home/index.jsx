import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection from './c-cpns/home-section-v1'
import SectionRooms from '@/components/section-rooms'
import SectionHeader from '@/components/section-header'

const home = memo(() => {
  const dispatch = useDispatch()

  // 调用请求, 数据存储到state中
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // 获取state中存储的请求数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  )

  return (
    <HomeWapper>
      <HomeBanner />
      {/* 热门目的地 */}
      <div className="content">
        <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}></SectionHeader>
        <SectionRooms width="33.33%" list={discountInfo?.dest_list?.['佛山']}></SectionRooms>
        {/*高性价比 */}
        <HomeSection infoData={goodPriceInfo}></HomeSection>
        {/* 好评分 */}
        <HomeSection infoData={highScoreInfo}></HomeSection>
      </div>
    </HomeWapper>
  )
})

export default home


// 看1637