import React from 'react'

import './Sidebar.css'
import Sidebarbtn from '../Button/Sidebarbtn'
import { closeSidebar } from '../../redux/SiderbarSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const sidebaritem = [ 
    {label: "Discover", iconpath: "/Discover.svg", height: "", width: "", path: "/home"},
    {label: "Wallet", iconpath: "/wallet.svg", path: "", height: "34px", width: "34px"},
    {label: "My Orders", iconpath: "/MyOrder.svg", path: "", height: "28px", width: "28px"},
    {label: "Create Task", iconpath: "/CreateTask.svg", path: "", height: "24px", width: "24px"},
    {label: "Notification", iconpath: "/notification.svg", path: "", height: "27px", width: "27px"},
    {label: "Profile", iconpath: "/profile.svg", path: "/profile", height: "20px", width: "20px"},
    {label: "Settings", iconpath: "/settings.svg", path: "", height: "27px", width: "27px"},
    {label: "About Us", iconpath: "/settings.svg", path: "/about", height: "27px", width: "27px"},
    {label: "FAQs", iconpath: "/Discover.svg", path: "", height: "", width: ""},
    {label: "Help and Feedback", iconpath: "/Discover.svg", path: "", height: "", width: ""},
    {label: "Refer", iconpath: "/refer.svg", path: "", height: "18px", width: "20px"},
    {label: "Logout", iconpath: "/logout.svg", path: "", height: "27px", width: "27px"},
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
                                    <Sidebarbtn label={item.label} iconpath={item.iconpath} height={item.height} width={item.width} />
                                </div>
                            )
                        }

                        return (
                            <div key={item.label} onClick={()=>(dispatch(closeSidebar()))}>
                                <Link to={item.path}>
                                    <Sidebarbtn label={item.label} iconpath={item.iconpath} height={item.height} width={item.width} />
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
