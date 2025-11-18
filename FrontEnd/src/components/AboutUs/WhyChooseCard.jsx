import React from 'react'

const WhyChooseCard = ({ icon, title, description }) => {
  return (
    <div className='bg-[#FFFFFF] rounded-2xl p-5 shadow-sm'>
      <div className='flex flex-row gap-x-3 items-start'>
        <div className='flex-shrink-0 w-10 h-10 bg-[#E4E6E6] rounded-lg flex justify-center items-center'>
          <img src={icon} alt={title} className='w-6 h-6' />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <h3 className='text-[#026A75] font-semibold text-base'>{title}</h3>
          <p className='text-[#312828] text-sm leading-relaxed'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseCard
