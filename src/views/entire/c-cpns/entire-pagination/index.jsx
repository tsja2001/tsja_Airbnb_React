import { pageSize } from '@/config'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/actionCreates'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { EntirePaginationWapper } from './style'

const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }), shallowEqual)

  const dispatch = useDispatch()

  const pageChange = (e) => {
    onChange(e)
    dispatch(changeCurrentPageAction(e - 1))
    dispatch(fetchRoomListAction())

    window.scrollTo(0, 0)
  }

  const { onChange } = props

  return (
    <EntirePaginationWapper>
      <Pagination
      color="red"
        onChange={pageChange}
        showSizeChanger={false}
        current={currentPage + 1}
        total={totalCount}
        pageSize={pageSize}
        // total={totalCount}
      />
    </EntirePaginationWapper>
  )
})

EntirePagination.propTypes = {
  onChange: PropTypes.func
}

export default EntirePagination
