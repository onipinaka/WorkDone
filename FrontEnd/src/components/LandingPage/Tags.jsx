import React from 'react'

const Tags = ({label, background}) => {

  return (
    <div style={{backgroundColor: background}} className={`p-1 rounded-md inline-flex`}>
        <p className='text-[8px] text-white font-semibold'>#{label}</p>
    </div>
  )
}

export default Tags