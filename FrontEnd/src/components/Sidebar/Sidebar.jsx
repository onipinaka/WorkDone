import React from 'react'

import './Sidebar.css'
import Sidebarbtn from '../Button/Sidebarbtn'
import { closeSidebar } from '../../redux/SiderbarSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const sidebaritem = [ 
    {label: "Discover", iconpath: "/sidebar/discover.svg", path: "/home"},
    {label: "Wallet", iconpath: "/sidebar/wallet.svg", path: ""},
    {label: "My Orders", iconpath: "/sidebar/myorder.svg", path: ""},
    {label: "Create Task", iconpath: "/sidebar/createorder.svg", path: ""},
    {label: "Notification", iconpath: "/sidebar/notification.svg", path: ""},
    {label: "Profile", iconpath: "/sidebar/profile.svg", path: "/profile"},
    {label: "Settings", iconpath: "/sidebar/setting.svg", path: ""},
    {label: "About Us", iconpath: "/sidebar/setting.svg", path: "/about"},
    {label: "FAQs", iconpath: "/sidebar/setting.svg", path: ""},
    {label: "Help and Feedback", iconpath: "/sidebar/setting.svg", path: ""},
    {label: "Refer", iconpath: "/sidebar/refer.svg", path: ""},
    {label: "Logout", iconpath: "/sidebar/logout.svg", path: ""},
]

const username = "Vivek"
const profilepciture = "/pfp.svg"

const Sidebar = () => {
    const dispatch = useDispatch();
  return (

    <div className='fixed top-0 left-0 z-50 h-full w-full opacity-100'>
        <div className='w-screen flex flex-row justify-between bg-theme-sidebar-bg/85 h-full min-h-screen overflow-hidden'>
            
            <div className='flex flex-col w-4/5 justify-start gap-[36px] bg-theme-sidebar-blue relative pl-[20px] h-full min-h-screen pb-8'>
                <div className='flex flex-col gap-y-[19px]'>
                    <img className='mt-[48px] w-[60px] h-[60px]' src={profilepciture} alt="Profile picture" />
                    <div>
                        <p className='text-white font-normal text-2xl'>Hello,</p>
                        <p className='mt-1 text-white font-semibold text-[28px]'>{username}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-y-[21px] pb-[41px] ml-3 overflow-y-auto sidebar-scroll flex-1'>



                    {sidebaritem.map((item, index) => {
                        const islast = (index === (sidebaritem.length - 1));

                        if(islast){
                            return (
                                <div key={item.label} className='mt-[20px]'>
                                    <Sidebarbtn label={item.label} iconpath={item.iconpath} />
                                </div>
                            )
                        }

                        return (
                            <div key={item.label} onClick={()=>(dispatch(closeSidebar()))}>
                                <Link to={item.path}>
                                    <Sidebarbtn label={item.label} iconpath={item.iconpath} />
                                </Link>
                            </div>
                        )
                    })}




                    
                </div>
                <img className='w-[212px] h-[186px] absolute top-0 right-0 transform translate-x-3 -translate-y-5' src="./vect2.svg" alt="" />
            </div>

            
            <img className='w-[126px] h-[136px] absolute bottom-[70px] left-0' src="./vect1.svg" alt="Decorative vector" />
            <div className='flex-grow h-full flex justify-center items-start'>
                <button 
                    className='mt-[27px] cursor-pointer bg-transparent border-none p-0' 
                    onClick={()=>(dispatch(closeSidebar()))}
                    aria-label="Close sidebar"
                >
                    <img src="./close.svg" alt="Close" />
                </button>
            </div>
        
        </div>
    </div>
  )
}

export default Sidebar
