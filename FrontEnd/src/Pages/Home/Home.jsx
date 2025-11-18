import React from 'react'
import SearchIcon from '../../components/Home/SearchIcon'
import Filters from '../../components/Home/Filters'
import TaskCreationCard from '../../components/Home/TaskCreationCard'
import TaskCard from '../../components/Home/TaskCard'

function Home() {
  return (
    <div className='flex flex-col gap-y-2 w-full max-w-screen-sm px-4'>
        <SearchIcon/>
        <Filters/>
        <div className='border-b-[2px] border-[#D9D9D9] border-solid mb-2'></div>
        <TaskCreationCard/>
        <div className='border-b-[2px] border-[#D9D9D9] border-solid mb-2'></div>
        <TaskCard/>
        <TaskCard/>
    </div>
  )
}

export default Home