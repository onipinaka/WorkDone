import React from 'react'

const OrderCard = ({headinglabel, description, imagepath}) => {
  return (
    <div className='flex flex-col w-[90%] gap-y-2.5 bg-opacity-0 z-20'>
        <div className='flex flex-col justify-end'>
            <p className='font-semibold text-[28px]'>{headinglabel}</p>
        </div>    
        <div className='flex flex-row gap-x-1.5'>
            <div className='flex-shrink-0'>
                <img className='h-[144px] w-[144px]' src={imagepath} alt={headinglabel} />
            </div>
            <div className='flex justify-start items-center'>
                <p className='text-[12px] font-normal'>
                    {description}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default OrderCard
