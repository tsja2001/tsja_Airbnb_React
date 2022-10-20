import SectionBar from '@/components/section-bars'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeSectionV2Wapper } from './style'

const HomeSectionV2 = memo((props) => {
  console.log('cpm render')
  const { infoData } = props

  // const defaultName = Object.keys(infoData?.dest_list ?? {})[0]
  const defaultName = Object.keys(infoData.dest_list)[0]
  console.log(defaultName)

  // 传入tabbar的回掉函数, 点击切换
  const [currentCity, changeCurrentCity] = useState(defaultName)

  useEffect(() => {
    changeCurrentCity(defaultName)
  }, [defaultName])


  const callback = useCallback((cityName) => {
    changeCurrentCity(cityName)
  }, [])

  return (
    <HomeSectionV2Wapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>
      <SectionBar
        list={infoData?.dest_address}
        lable="name"
        callback={callback}
      ></SectionBar>
      <SectionRooms
        width="33.33%"
        list={infoData?.dest_list?.[currentCity]}
      ></SectionRooms>
    </HomeSectionV2Wapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
