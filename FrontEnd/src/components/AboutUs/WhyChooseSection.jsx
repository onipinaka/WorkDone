import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const reasons = [
  {
    icon: '/aboutus/community.svg',
    title: 'Community-Driven',
    description: 'Join a network of reliable helpers and earners in your area.'
  },
  {
    icon: '/aboutus/flexible.svg',
    title: 'Flexible Opportunities',
    description: 'Find work that fits your schedule and skills.'
  },
  {
    icon: '/aboutus/matching.svg',
    title: 'Task Matching',
    description: 'Our smart algorithm connects you with the perfect helper or job.'
  },
  {
    icon: '/aboutus/quality.svg',
    title: 'Quality Assurance',
    description: 'We maintain high standards through our rating system.'
  }
]

const WhyChooseSection = () => {
  return (
    <div className='border-2 border-dashed border-[#026A75] rounded-2xl p-5 bg-[#EBEFEE]'>
      <h2 className='text-[#026A75] text-xl font-bold mb-5'>Why Choose WorkDone ?</h2>
      <div className='flex flex-col gap-y-3'>
        {reasons.map((reason, index) => (
          <WhyChooseCard 
            key={index}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyChooseSection
