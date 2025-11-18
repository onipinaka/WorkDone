import React from 'react'
import FilterTag from './FilterTag'

function Filters() {
  return (
    <div className='w-full flex flex-col gap-y-4 py-3 font-poppins mb-2'>
        <div>
            <p className='text-xl font-medium'>Filters</p>
        </div>
        <div className='flex flex-row gap-4 overflow-x-auto'>
            <FilterTag/>
            <FilterTag/>
            <FilterTag/>
            <FilterTag/>
        </div>
    </div>
  )
}

export default Filters