import React from 'react'
import Loginbtn from '../Button/Loginbtn'

const Header = () => {
  return (
    <div className='w-screen h-[90px] bg-white flex justify-center items-end pb-[14px]'>
      <div className='w-[90vw] bg-white  flex justify-between align items-center '>
        <img src="/hamburger.svg" alt="nav" className='h-[12px] w-auto'/>
        <Loginbtn/>
      </div>
    </div>
  )
}
export default Header
