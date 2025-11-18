import React from 'react'

const CoreValueCard = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-y-1.5 pl-4 border-l-4 border-[#026A75]'>
      <h3 className='text-[#026A75] font-semibold text-base'>{title}</h3>
      <p className='text-[#312828] text-sm leading-relaxed'>{description}</p>
    </div>
  )
}

export default CoreValueCard
