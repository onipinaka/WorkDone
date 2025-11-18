import React from 'react'
import CoreValueCard from './CoreValueCard'

const coreValues = [
  {
    title: 'Trust & Safety',
    description: 'We prioritize creating a secure environment where users can connect with confidence.'
  },
  {
    title: 'Accessibility',
    description: 'Our platform is designed to be inclusive and easy to use for everyone.'
  },
  {
    title: 'Community',
    description: 'We believe in fostering belonging and mutual support among all our users.'
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our platform to better serve our community\'s needs.'
  },
  {
    title: 'Empowerment',
    description: 'We believe in enabling individuals to achieve their goals through collaboration.'
  }
]

const CoreValuesSection = () => {
  return (
    <div className='border-2 border-dashed border-[#026A75] rounded-2xl p-5 bg-[#FFFFFF]'>
      <h2 className='text-[#026A75] text-xl font-bold mb-5'>Our Core Values</h2>
      <div className='flex flex-col gap-y-4'>
        {coreValues.map((value, index) => (
          <CoreValueCard 
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CoreValuesSection
