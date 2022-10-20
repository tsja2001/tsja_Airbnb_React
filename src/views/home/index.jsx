import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObj } from '@/utils/isEmptyObj'

const home = memo(() => {
  const dispatch = useDispatch()

  // 调用请求, 数据存储到state中
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // 获取state中存储的请求数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo
    }),
    shallowEqual
  )

  return (
    <HomeWapper>
      <HomeBanner />
      <div className="content">
        {/* 热门目的地 */}
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2> }
        {/*高性价比 */}
        <HomeSection infoData={goodPriceInfo}></HomeSection>
        {/* 好评分 */}
        <HomeSection infoData={highScoreInfo}></HomeSection>
        {/* 热门推荐 */}
        {isEmptyObj(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}></HomeSectionV2> }
      </div>
    </HomeWapper>
  )
})

export default home

// 看1637
