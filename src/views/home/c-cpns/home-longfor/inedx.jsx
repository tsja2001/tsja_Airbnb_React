import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongforWapper } from './style'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongforWapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>
      <div className="longforList">
        <ScrollView>
          {infoData.list.map((item) => (
            <LongforItem data={item} key={item.city} />
          ))}
        </ScrollView>
      </div>
    </HomeLongforWapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
