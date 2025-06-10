import React from 'react'

const OrderCard = ({headinglabel, description, imagepath}) => {
  return (
    <div className='flex flex-col widht  w-[90vw] gap-y-2.5 bg-opacity-0 z-20 '>
        <div className='flex   flex-col justify-end '>
            <p className='font-semibold text-[28px] text-bot '>{headinglabel}</p>
        </div>    
        <div className='flex flex-row gap-x-1.5'>
            <div className=''>
            <img className='h-[144px] w-[144px] max-w-none' src={imagepath} alt="Image" />
            </div>
            <div className='flex justify-start  items-center '>
                <p className='text-[12px] font-normal'>
                {description}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default OrderCard
