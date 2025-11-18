import React from 'react'

const ImpactCard = ({ value, label }) => {
  return (
    <div className='bg-[#FFFFFF] rounded-2xl p-5 shadow-sm flex flex-col items-center gap-y-2'>
      <p className='text-[#026A75] text-3xl font-bold'>{value}</p>
      <p className='text-[#0F0F0F] text-xs text-center'>{label}</p>
    </div>
  )
}

export default ImpactCard
