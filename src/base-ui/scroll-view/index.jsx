/**
 * 按照item宽度步进横向滚动
 */
import LeftBtn from '@/assets/svg/leftbtn'
import RightBtn from '@/assets/svg/rightbtn'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWapper } from './style'

const ScrollView = memo((props) => {
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0)

  const [showRightBtn, setRightBtn] = useState(false)
  const [showLeftBtn, setLeftBtn] = useState(false)

  const scrollContentRef = useRef()
  const offsetLeft = useRef(0)
  let overFlowWidth = useRef(0)

  useEffect(() => {
    // 可滚动区域总长度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 可视区域长度
    const clientWidth = scrollContentRef.current.clientWidth
    // 超出的长度
    overFlowWidth.current = scrollWidth - clientWidth

    setRightBtn(overFlowWidth.current > 0)
  }, [props.children])

  useEffect(() => {
    if (offsetLeft.current > overFlowWidth.current) {
      setRightBtn(false)
    } else {
      setRightBtn(true)
    }

    if (offsetLeft.current > 0) {
      setLeftBtn(true)
    } else {
      setLeftBtn(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetLeft.current])

  const nextHandler = () => {
    offsetLeft.current =
      scrollContentRef.current.children[currentFirstIndex + 1].offsetLeft

    setCurrentFirstIndex(currentFirstIndex + 1)
  }

  const prevHandler = () => {
    offsetLeft.current =
      scrollContentRef.current.children[currentFirstIndex - 1].offsetLeft

    setCurrentFirstIndex(currentFirstIndex - 1)
  }

  return (
    <ScrollViewWapper offsetLeft={offsetLeft.current}>
      {/* {showLeftBtn && <button >上一个</button>} */}
      {showLeftBtn && (
        <div className="btn fccc left" onClick={prevHandler}>
          <LeftBtn />
        </div>
      )}
      {showRightBtn && (
        <div className="btn fccc right" onClick={nextHandler}>
          <RightBtn />
        </div>
      )}
      <div className="scollBox">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWapper>
  )
})

export default ScrollView
