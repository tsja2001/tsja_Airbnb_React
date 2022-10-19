import React, { memo } from 'react'
import homeBannerImg from '@/assets/image/homeBanner.jpeg'
import { BannerWapper } from './style'

const HomeBanner = memo(() => {
  return (
    <BannerWapper>
      <div>
        HomeBanner
        {/* <img src={homeBannerImg}></img> */}
        {/* <img src={require('@/assets/image/homeBanner.jpeg')}></img> */}
      </div>
    </BannerWapper>
  )
})

export default HomeBanner
