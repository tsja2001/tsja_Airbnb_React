import IconLogo from '@/assets/svg/logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  const logoClickHandler = () => {
    console.log('first')
    // navigate({to: '/home'})
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="logo"  onClick={logoClickHandler} >
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
