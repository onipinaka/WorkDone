import React from 'react'

const Sidebarbtn = ({label, to, iconpath, height, width}) => {
  const iconStyle = {
    width: width || 'auto',
    height: height || 'auto'
  };

  return (
    <div className='flex flex-row justify-start items-center w-auto gap-x-[12px]'>
      <img style={iconStyle} src={iconpath} alt="" />
      <p className='text-white font-medium text-base'>{label}</p>
    </div>
  )
}

export default Sidebarbtn
