import React from 'react'
import GetStartedbtn from './GetStartedbtn'
import Tags from './Tags'

const TagsItem = [
    {label: 'SmartShopping', background: 'rgba(211,74,74,1)'},
    {label: 'JustAsk', background: 'rgba(200,211,74,1)'},
    {label: 'SideHustle', background: 'rgba(74,85,211,1)'},
    {label: 'CrowdsourcedDelivery', background: 'rgba(145,74,211,1)'},
]

const Hero = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[90vw] flex flex-col bg-theme-blue pt-6 px-2.5 gap-y-2.5 
        rounded-[20px] my-5'>
            <div>
                <p className='font-semibold text-[25px]'>
                    Get What You Need,<br/>Earn When You Want!
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img className='h-56 w-auto' src="/ordercard.svg" alt="" />
            </div>
            <div>
                <p className='font-semibold text-[20px]'>Need Something?<br/>Just Ask—Someone’s Got You!</p>
            </div>
            <div className='flex justify-evenly items-center'>
                {TagsItem.map((item) => (
                        <Tags key={item.label} label={item.label} background={item.background} />
                        
                    ))}
            </div>
            <div>
                <p className='font-medium text-[10px] text-theme-textgrey '>Chilling at home or just don’t feel like stepping out? No problem! Just say what you need, and someone nearby will grab it for you. Whether it’s a snack, a notebook, or anything else—help is on the way. It’s simple, fast, and makes life easier for everyone!</p>
            </div>
            <div className='self-center mt-11 mb-16'>
                <GetStartedbtn />

            </div>


        
        </div>
    </div>
  )
}

export default Hero
