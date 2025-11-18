import React from 'react'
import HowItWorksStep from './HowItWorksStep'

const steps = [
  {
    stepNumber: 1,
    title: 'Post a Task',
    description: 'Describe what you need done, when you need it, and your budget.'
  },
  {
    stepNumber: 2,
    title: 'Get Matched',
    description: 'Our system connects you with qualified helpers in your area.'
  },
  {
    stepNumber: 3,
    title: 'Choose a Helper',
    description: 'Review profiles, ratings, and choose the best fit for your task.'
  },
  {
    stepNumber: 4,
    title: 'Task Completed',
    description: 'Your chosen helper gets the job done to your satisfaction.'
  },
  {
    stepNumber: 5,
    title: 'Payment & Review',
    description: 'Pay securely through our platform and leave a review.'
  }
]

const HowItWorksSection = () => {
  return (
    <div className='bg-[#EBEFEE] rounded-2xl p-5'>
      <h2 className='text-[#026A75] text-xl font-bold mb-5'>How WorkDone Works</h2>
      <div className='flex flex-col gap-y-3'>
        {steps.map((step) => (
          <HowItWorksStep 
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  )
}

export default HowItWorksSection
