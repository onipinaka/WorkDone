import React from 'react'

function TaskCreationCard() {
  return (
    <div className='flex flex-row items-end font-poppins bg-gradient-to-r from-[#2FB092] to-[#8DD6C5] px-4 py-4 rounded-2xl w-full mb-4'>
        <div className='flex flex-col gap-y-3'>
            <p className='text-black text-[22px] font-bold text-wrap'>Had something to do?</p>
            <p className='text-black text-[12px] font-normal'>Get it done by creating the task</p>
        </div>
        <div>
            <button className='bg-[#1D756A] text-white font-medium text-sm py-[5px] px-[16px] rounded-br-2xl text-nowrap shadow-[3px_2px_4px_0_rgba(0,0,0,0.25)]'>Create Task</button>
        </div>
    </div>
  )
}

export default TaskCreationCard