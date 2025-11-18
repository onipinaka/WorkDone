import React from 'react'
import Loginbtn from '../Button/Loginbtn'
import { useDispatch } from 'react-redux'
import { openSidebar, toggleSidebar } from '../../redux/SiderbarSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-[90px] bg-white flex justify-center items-end pb-[14px]'>
      <div className='w-[90vw] bg-white flex justify-between items-center'>
        <button 
          className='cursor-pointer bg-transparent border-none p-0'
          onClick={()=>(dispatch(openSidebar()))}
          aria-label="Open navigation menu"
        >
          <img src="/hamburger.svg" alt="Menu" className='h-[12px] w-auto' />
        </button>
        <Loginbtn/>
      </div>
    </div>
  )
}
export default Header
