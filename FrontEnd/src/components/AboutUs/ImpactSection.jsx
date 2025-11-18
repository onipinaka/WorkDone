import React from 'react'
import ImpactCard from './ImpactCard'

const impactData = [
  { value: '10K+', label: 'Active Users' },
  { value: '25K+', label: 'Tasks Completed' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '30+', label: 'Cities Covered' }
]

const ImpactSection = () => {
  return (
    <div className='border-2 border-dashed border-[#026A75] rounded-2xl p-5 bg-[#FFFFFF]'>
      <h2 className='text-[#026A75] text-xl font-bold mb-5'>WorkDone Impact</h2>
      <div className='grid grid-cols-2 gap-3'>
        {impactData.map((data, index) => (
          <ImpactCard 
            key={index}
            value={data.value}
            label={data.label}
          />
        ))}
      </div>
    </div>
  )
}

export default ImpactSection
