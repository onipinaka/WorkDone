import React from 'react'

import './Sidebar.css'
import Sidebarbtn from '../Button/Sidebarbtn'

const sidebaritem = [ 
    {label: "Discover", iconpath: "/Discover.svg" , to : "",height: "", width: ""},
    {label: "Wallet", iconpath: "/wallet.svg" , to : "",height: "34px", width: "34px"},
    {label: "My Orders", iconpath: "/MyOrder.svg" , to : "",height: "28px", width: "28px"},
    {label: "Create Task", iconpath: "/CreateTask.svg" , to : "",height: "24px", width: "24px"},
    {label: "Notification", iconpath: "/notification.svg" , to : "",height: "27px", width: "27px"},
    {label: "Profile", iconpath: "/profile.svg" , to : "",height: "20px", width: "20px"},
    {label: "Settings", iconpath: "/settings.svg" , to : "",height: "27px", width: "27px"},
    {label: "About Us", iconpath: "/settings.svg" , to : ""},
    {label: "FAQs", iconpath: "/Discover.svg" , to : ""},
    {label: "Help and Feedback", iconpath: "/Discover.svg" , to : ""},
    {label: "Refer", iconpath: "/refer.svg" , to : "",height: "18px", width: "20px"},
    {label: "Logout", iconpath: "/logout.svg" , to : "",height: "27px", width: "27px"},
]

const username = "Vivek"
const profilepciture = "/pfp.svg"

const Sidebar = () => {
  return (

    <div className='absolute top-0 left-0 z-50 '>
        <div className='w-screen flex flex-row  justify-between bg-theme-sidebar-bg bg-opacity-75 h-screen overflow-hidden'>
            
            <div className='flex flex-col w-4/5 justify-start gap-[36px] bg-theme-sidebar-blue relative pl-[20px] overflow-hidden'>
                <div className='flex flex-col gap-y-[19px]'>
                    <img  className='mt-[48px] w-[60px] h-[60px]]' src={profilepciture} alt="pfp temp" />
                    <div>
                        <p className='text-white font-normal text-2xl'>Hello,</p>
                        <p className='mt-1 text-white font-semibold text-[28px] '>{username}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-y-[21px] pb-[41px] ml-3 overflow-y-auto sidebar-scroll'>



                    {sidebaritem.map((item,index) => {
                        const islast = (index === (sidebaritem.length - 1));

                        if(islast){
                            return (
                                <div className='mt-[20px]'>
                                    <Sidebarbtn label={item.label} iconpath={item.iconpath} />
                                </div>
                            )
                        }

                        return <Sidebarbtn label={item.label} iconpath={item.iconpath} />
                    })}




                    
                </div>
                <img className='w-[212px] h-[186px] absolute top-0 right-0 transform translate-x-3 -translate-y-5' src="./vect2.svg" alt="" />
            </div>
            
            <img className='w-[126px] h-[136px] absolute bottom-[70px] left-0 ' src="./vect1.svg" alt="" />
            <div className='flex-grow h-[300px] flex justify-center items-start '><img className='mt-[27px]' src="./close.svg" alt="" /></div>
        
        </div>
    </div>
  )
}

export default Sidebar
