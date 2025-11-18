import React from 'react'

const Sidebarbtn = ({label, to, iconpath}) => {
  return (
    <div className='flex flex-row justify-start items-center w-auto gap-x-[12px]'>
      <img className='w-6 h-6 object-contain' src={iconpath} alt="" />
      <p className='text-white font-medium text-base'>{label}</p>
    </div>
  )
}

export default Sidebarbtn
