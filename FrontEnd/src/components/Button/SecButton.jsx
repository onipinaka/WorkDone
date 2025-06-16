import React from 'react'

function SecButton({name}) {
  return (
    <button className='w-[300px] h-[52px] text-[20px] font-poppins font-medium text-white rounded-[20px] bg-theme-submit-btn' type="submit">{name}</button>
  )
}

export default SecButton