import React from 'react'

const Sidebarbtn = ({label, to, iconpath, height, width}) => {
  return (
    <div className='flex flex-row justify-start items-center w-auto gap-x-[12px]'>
      <img className={`w-[${width}] h-[${height}]`} src={iconpath} alt="" />
      <p className='  text-white font-medium text-base'>{label}</p>
    </div>
  )
}

export default Sidebarbtn
