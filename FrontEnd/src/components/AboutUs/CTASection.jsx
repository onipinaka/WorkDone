import React from 'react'

const CTASection = () => {
  return (
    <div className='bg-[#026A75] rounded-2xl p-8 flex flex-col gap-y-5 items-center text-center'>
      <h2 className='text-[#FFFFFF] text-2xl font-bold'>Ready to Get Started?</h2>
      <p className='text-[#EFF9F8] text-sm leading-relaxed max-w-md'>
        Join our community today and experience the power of getting things done together.
      </p>
      <div className='flex flex-row gap-x-3'>
        <button className='bg-[#FFFFFF] text-[#026A75] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#CBBE7F] transition-colors'>
          Sign Up Now
        </button>
        <button className='bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#FFFFFF]/10 transition-colors'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default CTASection
