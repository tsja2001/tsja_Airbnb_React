import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionWapper } from './style'

const HomeSection = memo((props) => {
  const { infoData } = props

  return (
    <HomeSectionWapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>
      <SectionRooms list={infoData?.list}></SectionRooms>
      <SectionFooter/>
    </HomeSectionWapper>
  )
})

HomeSection.propTypes = {
  infoData: PropTypes.object
}

export default HomeSection
