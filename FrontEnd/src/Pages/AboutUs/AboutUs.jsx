import React from 'react'
import MissionSection from '../../components/AboutUs/MissionSection'
import WhyChooseSection from '../../components/AboutUs/WhyChooseSection'
import StorySection from '../../components/AboutUs/StorySection'
import HowItWorksSection from '../../components/AboutUs/HowItWorksSection'
import CoreValuesSection from '../../components/AboutUs/CoreValuesSection'
import ImpactSection from '../../components/AboutUs/ImpactSection'
import CTASection from '../../components/AboutUs/CTASection'

function AboutUs() {
  return (
    <div className='flex flex-col justify-center bg-[#026A75] gap-[38px] w-full max-w-screen-sm mx-auto'>
      <div className='flex flex-col relative justify-center'>
        <div className='absolute top-4 left-4 w-8 h-8 bg-[#FFFFFF]/20 rounded-full'></div>
        <div className='absolute top-2 right-8 w-6 h-6 bg-[#FFFFFF]/10 rounded-full'></div>
        
        <p className='text-[#FFFFFF] text-[52px] pl-[21px] font-bold mt-[48px] font-poppins'>About Us</p>
        <p className='text-[#FFFFFF] pl-[21px] text-[16px] font-medium font-poppins'>Connecting Tasks with Talent</p>
      </div>
      
      <div className='bg-[#FFFFFF] rounded-t-3xl flex justify-center pb-8'>
        <div className='flex flex-col w-[90vw] gap-y-8 justify-center mt-6'>
          <MissionSection />
          <WhyChooseSection />
          <StorySection />
          <HowItWorksSection />
          <CoreValuesSection />
          <ImpactSection />
          <CTASection />
        </div>
      </div>
    </div>
  )
}

export default AboutUs